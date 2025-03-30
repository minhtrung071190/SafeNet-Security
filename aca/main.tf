
#Create storage account
# resource "azurerm_storage_account" "storageaccount" {
#   name                     = "cloudexsenecastorage"
#   resource_group_name      = var.resource_group_name
#   location                 = var.location
#   account_tier             = "Standard"
#   account_replication_type = "LRS"
#   depends_on               = [azurerm_resource_group.rg]
# }

# #Create resource group
# resource "azurerm_resource_group" "rg" {
#   name     = var.resource_group_name
#   location = var.location
# }

# Create a Log Analytics workspace (required for Container Apps)
resource "azurerm_log_analytics_workspace" "logs" {
  name                = "logs"
  location            = var.location
  resource_group_name = var.resource_group_name
  sku                 = "PerGB2018"
  retention_in_days   = 30
}

# Create a Container Apps environment
resource "azurerm_container_app_environment" "safenet_env" {
  name                       = "safenet-env"
  location                   = var.location
  resource_group_name        = var.resource_group_name
  log_analytics_workspace_id = azurerm_log_analytics_workspace.logs.id
}


# Create backend-db
resource "azurerm_container_app" "frontend" {
  name                         = "frontend"
  container_app_environment_id = azurerm_container_app_environment.safenet_env.id
  resource_group_name          = var.resource_group_name
  revision_mode                = "Single" # Change if needed

  template {
    container {
      name   = "frontend"
      image  = var.frontend_img
      cpu    = 0.5
      memory = "1Gi"

      # Registry authentication
      env {
        name  = "DOCKER_REGISTRY_SERVER"
        value = "index.docker.io"
      }
      env {
        name  = "DOCKER_REGISTRY_USERNAME"
        value = var.DOCKER_REGISTRY_USERNAME
      }
      env {
        name  = "DOCKER_REGISTRY_PASSWORD"
        value = var.DOCKER_REGISTRY_PASSWORD
      }
    }
  }
  ingress {
    allow_insecure_connections = true
    external_enabled           = true
    target_port                = 80
    transport                  = "tcp"
    traffic_weight {
      latest_revision = true
      percentage      = 100
    }
  }
}