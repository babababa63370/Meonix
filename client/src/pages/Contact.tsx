import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertMessageSchema } from "@shared/schema";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

type MessageFormData = z.infer<typeof insertMessageSchema>;

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<MessageFormData>({
    resolver: zodResolver(insertMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: MessageFormData) => {
    setIsSubmitting(true);
    try {
      // Utilisation de Formspree pour un envoi direct sans config backend complexe
      const response = await fetch("https://formspree.io/f/xvgzlowq", { // Note: l'ID devra être remplacé par celui du user ou je reste sur mon API si on préfère
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          message: data.message,
          _subject: `Nouveau message de ${data.name}`
        }),
      });

      if (!response.ok) {
        throw new Error("Erreur lors de l'envoi du message");
      }

      toast({
        title: "Message envoyé!",
        description: "Merci pour ton message, je vais te répondre bientôt.",
      });

      form.reset();
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Une erreur s'est produite lors de l'envoi du message.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-8">
          <Link href="/">
            <Button variant="outline" size="sm" data-testid="button-back">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Retour
            </Button>
          </Link>
        </div>

        <div className="space-y-12">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4 text-foreground">Contact</h1>
            <p className="text-xl text-muted-foreground">
              Entrons en contact
            </p>
          </div>

          <div className="space-y-12 max-w-3xl mx-auto">
            <section className="space-y-8">
              <div className="bg-secondary/50 border border-border rounded-lg p-6">
                <h2 className="text-xl font-semibold text-foreground mb-3">Message</h2>
                <p className="text-muted-foreground">
                  Envoie-moi des idées, des suggestions ou demande-moi de coder quelque chose. J'adorerais avoir tes retours et tes propositions!
                </p>
              </div>

              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                  data-testid="form-contact"
                >
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Ton nom</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Comment tu t'appelles?"
                            {...field}
                            data-testid="input-name"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Ton adresse email</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="ton.email@exemple.com"
                            {...field}
                            data-testid="input-email"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Ton message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Partage tes idées, suggestions ou demandes..."
                            className="min-h-32 resize-none"
                            {...field}
                            data-testid="textarea-message"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    size="lg"
                    className="w-full"
                    data-testid="button-submit"
                  >
                    {isSubmitting ? "Envoi en cours..." : "Envoyer"}
                  </Button>
                </form>
              </Form>
            </section>
          </div>

          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/">
              <Button size="lg" variant="outline" data-testid="button-home">
                Retour à l'Accueil
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
