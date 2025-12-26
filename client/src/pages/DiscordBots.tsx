import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function DiscordBots() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-8">
          <Link href="/">
            <Button variant="outline" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Retour
            </Button>
          </Link>
        </div>

        <div className="space-y-12">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4 text-foreground">Bot Discord</h1>
            <p className="text-xl text-muted-foreground">
              Automatisation et gestion communautaire avec les bots Discord
            </p>
          </div>

          <div className="space-y-12 max-w-3xl">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Qu'est-ce que c'est ?</h2>
              <p className="text-muted-foreground mb-4">
                Les bots Discord sont des applications automatisées qui améliorent les fonctionnalités d'un serveur Discord. Ils peuvent gérer la modération, l'engagement, les transactions crypto, et bien d'autres tâches automatiquement.
              </p>
              <p className="text-muted-foreground">
                J'ai créé plusieurs bots Discord pour différents usages, chacun spécialisé dans des tâches spécifiques pour répondre aux besoins des communautés.
              </p>
              <div className="h-px bg-border my-12" />
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Bots de Modération</h2>
              <p className="text-muted-foreground mb-4">
                Des bots pour maintenir l'ordre et la sécurité sur vos serveurs Discord. Ils peuvent bannir automatiquement les utilisateurs spammeurs, avertir les utilisateurs, réguler le contenu et bien plus.
              </p>
              <p className="text-muted-foreground mb-4">
                Certains fonctionnent avec l'API Discord pour des fonctionnalités avancées, d'autres utilisent des systèmes personnalisés pour une modération sur mesure adaptée à votre communauté.
              </p>
              <div className="h-px bg-border my-12" />
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Bots Crypto</h2>
              <p className="text-muted-foreground mb-4">
                Des bots spécialisés dans l'univers des cryptomonnaies. Ils peuvent afficher les prix en temps réel, envoyer des alertes sur les mouvements de marché, gérer les transactions et fournir des informations sur les tokens.
              </p>
              <p className="text-muted-foreground">
                Parfaits pour les communautés de trading ou les projets crypto qui veulent tenir leurs membres informés et engagés.
              </p>
              <div className="h-px bg-border my-12" />
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Bots Généraux</h2>
              <p className="text-muted-foreground mb-4">
                Des bots multi-usages qui ajoutent des fonctionnalités amusantes et utiles à votre serveur : commandes personnalisées, systèmes de points, jeux, musique, et bien d'autres.
              </p>
              <p className="text-muted-foreground">
                Ils augmentent l'engagement des membres et rendent votre serveur plus dynamique et attractif.
              </p>
              <div className="h-px bg-border my-12" />
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Bots de Surveillance</h2>
              <p className="text-muted-foreground mb-4">
                Des bots pour surveiller et gérer des groupes ou communautés, notamment les groupes Roblox. Ils peuvent logger les activités, envoyer des rapports, gérer les rôles et permissions, et s'assurer que tout fonctionne correctement.
              </p>
              <p className="text-muted-foreground">
                Idéal pour les administrateurs qui veulent rester informés de tout ce qui se passe dans leurs communautés.
              </p>
              <div className="h-px bg-border my-12" />
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Pourquoi Utiliser Mes Bots ?</h2>
              <ul className="space-y-3 text-muted-foreground list-disc list-inside">
                <li>Personnalisables selon vos besoins spécifiques</li>
                <li>Fiables et stables pour une utilisation 24/7</li>
                <li>Support et améliorations continues</li>
                <li>Intégration fluide avec Discord et les APIs externes</li>
                <li>Sécurité et respect de la vie privée des utilisateurs</li>
              </ul>
            </section>
          </div>

          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/">
              <Button size="lg" variant="outline">Retour à l'Accueil</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
