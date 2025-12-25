export default function Home() {
  const interests = [
    {
      title: 'Programmation',
      description: 'Créer des solutions élégantes à travers le code. Construire des applications qui résolvent des problèmes réels et repoussent les limites technologiques.',
      icon: '{}',
    },
    {
      title: 'Mathématiques',
      description: 'Explorer le langage de l\'univers. Du calcul aux algorithmes, les mathématiques sont le fondement de tout.',
      icon: '∑',
    },
    {
      title: 'Espace',
      description: 'Contempler le cosmos. Comprendre notre place dans l\'univers et les possibilités infinies au-delà.',
      icon: '★',
    },
  ];

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center px-4 py-12">
      <div className="max-w-4xl w-full space-y-12 animate-in fade-in duration-700">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-foreground">
            MEONIX
          </h1>
          <div className="h-1 w-20 bg-accent mx-auto rounded-full" />
        </div>

        {/* Description */}
        <div className="text-center space-y-4">
          <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto">
            Bienvenue dans mon espace numérique. Je suis passionné par l'exploration de l'intersection entre la
            <span className="text-accent font-medium"> programmation</span>, les
            <span className="text-accent font-medium"> mathématiques</span> et l'
            <span className="text-accent font-medium"> espace</span>.
          </p>
        </div>

        {/* Interests Grid */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {interests.map((interest, idx) => (
            <div
              key={idx}
              className="p-6 border border-border rounded-lg bg-secondary/50 hover-elevate transition-all"
              data-testid={`card-interest-${idx}`}
            >
              <div className="text-4xl mb-4">{interest.icon}</div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                {interest.title}
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {interest.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
