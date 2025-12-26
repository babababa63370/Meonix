export default function About() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center px-4 py-12">
      <div className="max-w-2xl w-full space-y-8 animate-in fade-in duration-700">
        <div className="text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground">À Propos</h1>
          <div className="h-1 w-20 bg-accent mx-auto rounded-full" />
        </div>

        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>
            Une plateforme éducative pour explorer et comprendre les mathématiques à travers l'interaction, la visualisation et le jeu.
          </p>

          <div className="bg-secondary/50 p-8 rounded-lg border border-border">
            <p>
              Je crois que les mathématiques ne sont pas seulement des formules et des théorèmes abstraits, mais une exploration passionnante de la nature de l'univers. En combinant la programmation, les visualisations interactives et les jeux, je crée des expériences qui rendent les concepts mathématiques accessibles et fascinants.
            </p>
          </div>

          <p>
            Mes projets se concentrent sur la démystification des mathématiques avancées, en les rendant visuelles, interactives et amusantes à apprendre.
          </p>
        </div>
      </div>
    </div>
  );
}
