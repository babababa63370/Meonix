export default function Home() {
  const interests = [
    {
      title: 'Programmation',
      description: 'Crafting elegant solutions through code. Building applications that solve real problems and push technological boundaries.',
      icon: '{}',
    },
    {
      title: 'Mathématiques',
      description: 'Exploring the language of the universe. From calculus to algorithms, mathematics is the foundation of everything.',
      icon: '∑',
    },
    {
      title: 'Espace',
      description: 'Gazing at the cosmos. Understanding our place in the universe and the infinite possibilities beyond.',
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
            Welcome to my digital space. I'm passionate about exploring the intersection of 
            <span className="text-accent font-medium"> programming</span>, 
            <span className="text-accent font-medium"> mathematics</span>, and 
            <span className="text-accent font-medium"> space</span>.
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
