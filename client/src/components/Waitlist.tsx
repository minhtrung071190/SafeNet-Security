import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { insertWaitlistSchema } from "@shared/schema";
import { type InsertWaitlist } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Waitlist: React.FC = () => {
  const { toast } = useToast();
  
  const form = useForm<InsertWaitlist>({
    resolver: zodResolver(insertWaitlistSchema),
    defaultValues: {
      email: "",
      company: "",
      companySize: "none",
      wantsUpdates: false,
    },
  });

  const waitlistMutation = useMutation({
    mutationFn: async (data: InsertWaitlist) => {
      const response = await apiRequest("POST", "/api/waitlist", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Success!",
        description: "You've been added to our waitlist. We'll be in touch soon!",
        variant: "default",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to join waitlist. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertWaitlist) => {
    waitlistMutation.mutate(data);
  };

  return (
    <section id="waitlist" className="py-16 bg-gradient-to-br from-navy-blue to-navy-blue/90 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join the SafeNet Waitlist
          </h2>
          <p className="text-xl text-gray-200">
            Be the first to access our revolutionary security platform when it launches. Sign up today for exclusive early access and special pricing.
          </p>
        </div>

        <div className="max-w-lg mx-auto bg-white rounded-lg shadow-xl p-6 md:p-8 border border-gray-200">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700">
                      Email address <span className="text-red-600">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="your@email.com"
                        className="bg-gray-50"
                        required
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="company"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700">
                      Company name (optional)
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Your organization"
                        className="bg-gray-50"
                        {...field}
                        value={field.value || ""}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="companySize"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700">
                      Company size (optional)
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value || "none"}
                    >
                      <FormControl>
                        <SelectTrigger className="bg-gray-50 border border-gray-200">
                          <SelectValue placeholder="Select company size" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="none">Select company size</SelectItem>
                        <SelectItem value="1-10">1-10 employees</SelectItem>
                        <SelectItem value="11-50">11-50 employees</SelectItem>
                        <SelectItem value="51-200">51-200 employees</SelectItem>
                        <SelectItem value="201-500">201-500 employees</SelectItem>
                        <SelectItem value="501+">501+ employees</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="wantsUpdates"
                render={({ field }) => (
                  <FormItem className="flex items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value || false}
                        onCheckedChange={(checked) => field.onChange(!!checked)}
                      />
                    </FormControl>
                    <div className="leading-none">
                      <FormLabel className="font-medium text-gray-700">
                        Send me product updates
                      </FormLabel>
                      <p className="text-sm text-gray-500">
                        We'll keep you informed about our launch and security trends.
                      </p>
                    </div>
                  </FormItem>
                )}
              />
              
              <Button
                type="submit"
                className="w-full bg-orange hover:bg-orange/90 text-white"
                disabled={waitlistMutation.isPending}
              >
                {waitlistMutation.isPending ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Please wait
                  </>
                ) : (
                  "Join Waitlist"
                )}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default Waitlist;
