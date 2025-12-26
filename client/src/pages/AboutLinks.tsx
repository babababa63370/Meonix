import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Github, MessageCircle, Music, FileText, Gamepad2, LinkIcon } from "lucide-react";

export default function AboutLinks() {
  const links = [
    {
      id: 1,
      title: "GitHub",
      description: "Découvrez mes projets de programmation",
      url: "https://github.com/babababa63370",
      icon: Github,
    },
    {
      id: 2,
      title: "Discord",
      description: "Ajouter en ami pour discuter",
      url: "https://discord.gg/xTCE4Mv9",
      icon: MessageCircle,
    },
    {
      id: 3,
      title: "Guns.lol",
      description: "Mon profil personnel",
      url: "https://guns.lol/.meonix",
      icon: LinkIcon,
    },
    {
      id: 4,
      title: "TikTok",
      description: "Suivez mes contenus vidéo",
      url: "https://tiktok.com/@meonixbs2.0",
      icon: Music,
    },
    {
      id: 5,
      title: "Formulaire d'Idées",
      description: "Proposez-moi des idées de projets",
      url: "https://forms.gle/xQQ6VUumgXqfRM5B9",
      icon: FileText,
    },
    {
      id: 6,
      title: "Roblox",
      description: "Mon profil Roblox",
      url: "https://roblox.com/fr/users/1802025393/profile?friendshipSourceType=PlayerSearch",
      icon: Gamepad2,
    },
  ];

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
            <h1 className="text-5xl font-bold mb-4 text-foreground">Mes liens</h1>
            <p className="text-xl text-muted-foreground">
              Connectez-vous avec moi sur ces différentes plateformes
            </p>
          </div>

          <div className="space-y-12 max-w-3xl">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Connectez-vous avec moi</h2>
              <p className="text-muted-foreground mb-8">
                Voici mes différents canaux de communication et mes profils en ligne. N'hésitez pas à me contacter ou à me suivre !
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {links.map((link) => {
                  const IconComponent = link.icon;
                  return (
                    <a
                      key={link.id}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-testid={`link-${link.title.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      <Card className="hover-elevate h-full p-6 cursor-pointer transition-all">
                        <div className="flex items-start gap-4">
                          <div className="mt-1">
                            <IconComponent className="h-6 w-6 text-accent" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold text-foreground mb-1">
                              {link.title}
                            </h3>
                            <p className="text-muted-foreground text-sm">
                              {link.description}
                            </p>
                          </div>
                        </div>
                      </Card>
                    </a>
                  );
                })}
              </div>
            </section>
          </div>

          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/">
              <Button size="lg" variant="outline" data-testid="button-home">Retour à l'Accueil</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
