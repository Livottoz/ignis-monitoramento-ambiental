import { createFileRoute } from "@tanstack/react-router";
import { Cpu, Cloud, BrainCircuit, Sun, Radio, LineChart, Flame, Leaf, HeartPulse, Building2, Globe2, Trees, Mail, MapPin, CalendarDays } from "lucide-react";
import logo from "@/assets/ignis-logo.png.asset.json";
import fotoAndre from "@/assets/foto-andre.png.asset.json";
import fotoLarissa from "@/assets/foto-larissa.png.asset.json";
import fotoNicole from "@/assets/foto-nicole.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "IGNIS — Prevenção inteligente de queimadas" },
      { name: "description", content: "Conheça o IGNIS, projeto do IFSP Campinas que monitora a qualidade do ar com sensores e IA para prevenir queimadas." },
      { property: "og:title", content: "IGNIS — Prevenção inteligente de queimadas" },
      { property: "og:description", content: "Sensores de baixo custo, nuvem e inteligência artificial para detectar riscos de queimadas antes que aconteçam." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const team = [
  { name: "Larissa de Oliveira Motta", role: "Estudante pesquisadora", photo: fotoLarissa },
  { name: "Nicole Militão Livotto", role: "Estudante pesquisadora", photo: fotoNicole },
  { name: "Prof. Me. André Luís Bordignon", role: "Orientador", photo: fotoAndre },
];

const features = [
  { icon: Cpu, title: "Sensores acessíveis", text: "Temperatura, umidade, pressão, fumaça, gases tóxicos e material particulado (PM2.5)." },
  { icon: Cloud, title: "Dados na nuvem", text: "Coleta contínua enviada via Wi-Fi para uma plataforma IoT." },
  { icon: BrainCircuit, title: "Inteligência artificial", text: "Modelo em Python cruza nossos dados com bases do INMET, INPE e MonitorAR para identificar padrões e anomalias." },
  { icon: LineChart, title: "Alertas e visualizações", text: "Gráficos e mapas de cores que mostram áreas com potencial risco de queimadas." },
  { icon: Sun, title: "Energia solar", text: "Painel solar e bateria recarregável garantem autonomia em campo." },
];

const future = [
  { icon: Radio, title: "Conectividade LoRa", text: "Levar o monitoramento a áreas remotas, sem infraestrutura de internet." },
  { icon: LineChart, title: "Plataforma completa", text: "Dashboards interativos e mapas de calor tridimensionais." },
  { icon: BrainCircuit, title: "IA cada vez melhor", text: "Treinar o modelo com mais dados para alertas mais precisos." },
  { icon: Flame, title: "Novas funções", text: "Seguir aprimorando o projeto com recursos que ajudem ainda mais no combate às queimadas." },
];

const ods = [
  { icon: HeartPulse, n: "3", title: "Saúde e bem-estar" },
  { icon: Building2, n: "11", title: "Cidades sustentáveis" },
  { icon: Globe2, n: "13", title: "Ação climática" },
  { icon: Trees, n: "15", title: "Vida terrestre" },
];

const eventos = [
  { nome: "Mostratec", local: "Rio Grande do Sul" },
  { nome: "Bragantec", local: "Bragança Paulista" },
  { nome: "Desafio Maker Fecap", local: "São Paulo" },
  { nome: "FECCIF", local: "IF de Suzano" },
  { nome: "CONICT", local: "IF de Guarulhos" },
];

function Index() {
  return (
    <main className="font-sans">
      {/* Topo */}
      <header className="sticky top-0 z-20 border-b border-border bg-background/85 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <a href="#inicio" className="flex items-center gap-2">
            <img src={logo.url} alt="Logo IGNIS" className="h-10 w-10 rounded-xl object-contain" />
            <span className="font-display text-xl font-extrabold text-primary">IGNIS</span>
          </a>
          <div className="hidden gap-6 text-sm font-medium text-muted-foreground md:flex">
            <a href="#equipe" className="hover:text-primary">Equipe</a>
            <a href="#historia" className="hover:text-primary">Origem</a>
            <a href="#projeto" className="hover:text-primary">O projeto</a>
            <a href="#futuro" className="hover:text-primary">Futuro</a>
            <a href="#impacto" className="hover:text-primary">Impacto</a>
            <a href="#contato" className="hover:text-primary">Contato</a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section id="inicio" className="bg-hero text-primary-foreground">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
          <div>
            <p className="mb-4 inline-block rounded-full bg-primary-foreground/10 px-4 py-1 text-sm">IFSP — Câmpus Campinas · 2026</p>
            <h1 className="font-display text-5xl font-extrabold leading-tight md:text-6xl">
              Prevenir o fogo <span className="text-flame-gradient">antes</span> que ele comece.
            </h1>
            <p className="mt-6 max-w-lg text-lg text-primary-foreground/85">
              As queimadas destruem florestas inteiras, poluem o ar que todos nós respiramos e agravam problemas de saúde — principalmente de crianças e idosos. O IGNIS nasceu para ajudar a mudar esse cenário.
            </p>
            <p className="mt-4 max-w-lg text-lg text-primary-foreground/85">
              Desenvolvemos um sistema inteligente de monitoramento da qualidade do ar que identifica o risco de queimadas antes que elas aconteçam, protegendo a natureza e as pessoas.
            </p>
            <a href="#projeto" className="mt-8 inline-block rounded-full bg-flame px-7 py-3 font-semibold text-accent-foreground shadow-soft transition hover:scale-105">
              Conheça o projeto
            </a>
          </div>
          <div className="flex justify-center">
            <div className="rounded-3xl bg-card p-6 shadow-soft">
              <img src={logo.url} alt="Logo do projeto IGNIS" className="h-64 w-64 rounded-3xl object-contain md:h-80 md:w-80" />
            </div>
          </div>
        </div>
      </section>

      {/* Equipe */}
      <section id="equipe" className="mx-auto max-w-6xl px-6 py-24">
        <SectionTitle kicker="Quem somos" title="Nossa equipe" />
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((m) => (
            <div key={m.name} className="rounded-3xl border border-border bg-card p-8 text-center shadow-soft">
              <img
                src={m.photo.url}
                alt={`Foto de ${m.name}`}
                className="mx-auto h-40 w-40 rounded-full border-4 border-leaf/40 object-cover shadow-soft"
              />
              <h3 className="mt-6 font-display text-lg font-bold">{m.name}</h3>
              <p className="mt-1 text-sm font-medium text-flame">{m.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Origem */}
      <section id="historia" className="bg-secondary">
        <div className="mx-auto max-w-4xl px-6 py-24">
          <SectionTitle kicker="Origem" title="De onde surgiu a ideia?" />
          <div className="mt-10 space-y-5 text-lg leading-relaxed text-secondary-foreground">
            <p>
              Tudo começou com um edital do <strong>CONIF</strong>, uma competição de projetos de sustentabilidade na nossa instituição. Queríamos muito competir, mas ainda não tínhamos um projeto — e nenhum tema nos agradava.
            </p>
            <p>
              Até que, perto da casa de uma das integrantes, aconteceu uma <strong className="text-flame">queimada</strong>. Começamos a pesquisar mais a fundo: o que no ambiente determina se uma queimada pode ou não acontecer?
            </p>
            <p>
              Assim chegamos às variáveis ambientais e buscamos formas de monitorá-las. A partir daí, as outras ideias foram surgindo e sendo aprimoradas — e é assim que queremos continuar.
            </p>
          </div>
        </div>
      </section>

      {/* Projeto */}
      <section id="projeto" className="mx-auto max-w-6xl px-6 py-24">
        <SectionTitle kicker="O que é" title="O projeto IGNIS" />
        <p className="mx-auto mt-6 max-w-3xl text-center text-lg text-muted-foreground">
          Um dispositivo com sensores eletrônicos acessíveis que monitora as condições do ar associadas às queimadas. Os dados vão para a nuvem e são analisados por uma inteligência artificial que identifica padrões e gera alertas para áreas de risco.
        </p>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="rounded-3xl border border-border bg-card p-7 transition hover:-translate-y-1 hover:shadow-soft">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary">
                <f.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-5 font-display text-lg font-bold">{f.title}</h3>
              <p className="mt-2 text-muted-foreground">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Futuro */}
      <section id="futuro" className="bg-hero text-primary-foreground">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <SectionTitle kicker="Próximos passos" title="Perspectivas futuras" light />
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {future.map((f) => (
              <div key={f.title} className="flex gap-5 rounded-3xl bg-primary-foreground/10 p-7">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-flame">
                  <f.icon className="h-6 w-6 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold">{f.title}</h3>
                  <p className="mt-1 text-primary-foreground/80">{f.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impacto */}
      <section id="impacto" className="mx-auto max-w-6xl px-6 py-24">
        <SectionTitle kicker="Nosso compromisso" title="Por um meio ambiente melhor" />
        <p className="mx-auto mt-6 max-w-3xl text-center text-lg text-muted-foreground">
          Queremos oferecer uma solução de baixo custo e fácil de implementar que ajude órgãos públicos e a sociedade a agir antes do fogo — protegendo a biodiversidade, a qualidade do ar e a saúde das pessoas, especialmente crianças, idosos e regiões mais vulneráveis.
        </p>
        <div className="mt-14 grid grid-cols-2 gap-5 md:grid-cols-4">
          {ods.map((o) => (
            <div key={o.n} className="rounded-3xl border border-border bg-card p-6 text-center">
              <o.icon className="mx-auto h-8 w-8 text-leaf" />
              <p className="mt-3 font-display text-3xl font-extrabold text-flame">ODS {o.n}</p>
              <p className="mt-1 text-sm font-medium">{o.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Agenda */}
      <section id="agenda" className="bg-secondary">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <SectionTitle kicker="Onde nos encontrar" title="Onde estaremos apresentando" />
          <p className="mx-auto mt-6 max-w-3xl text-center text-lg text-muted-foreground">
            O IGNIS estará em destaque nos seguintes eventos e feiras de ciência:
          </p>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {eventos.map((e) => (
              <div key={e.nome} className="rounded-3xl border border-border bg-card p-7 text-center shadow-soft">
                <CalendarDays className="mx-auto h-8 w-8 text-flame" />
                <h3 className="mt-4 font-display text-lg font-bold">{e.nome}</h3>
                <p className="mt-2 flex items-center justify-center gap-1.5 text-sm font-medium text-muted-foreground">
                  <MapPin className="h-4 w-4 text-leaf" /> {e.local}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="mx-auto max-w-6xl px-6 py-24">
        <SectionTitle kicker="Fale com a gente" title="Entre em contato" />
        <div className="mx-auto mt-12 max-w-2xl rounded-3xl border border-border bg-card p-10 text-center shadow-soft">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary">
            <Mail className="h-7 w-7 text-primary" />
          </div>
          <p className="mt-6 text-lg text-muted-foreground">
            Quer saber mais sobre o projeto, propor uma parceria ou convidar o IGNIS para um evento? Escreva para a gente:
          </p>
          <a
            href="mailto:oprojetoignis@gmail.com"
            className="mt-6 inline-block rounded-full bg-flame px-7 py-3 font-semibold text-accent-foreground shadow-soft transition hover:scale-105"
          >
            oprojetoignis@gmail.com
          </a>
        </div>
      </section>

      <footer className="border-t border-border bg-secondary">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-6 py-10 text-center text-sm text-muted-foreground">
          <Leaf className="h-5 w-5 text-leaf" />
          <p><strong className="font-display text-primary">IGNIS</strong> · Instituto Federal de São Paulo — Câmpus Campinas · 2026</p>
        </div>
      </footer>
    </main>
  );
}

function SectionTitle({ kicker, title, light }: { kicker: string; title: string; light?: boolean }) {
  return (
    <div className="text-center">
      <p className="text-sm font-semibold uppercase tracking-widest text-flame">{kicker}</p>
      <h2 className={`mt-2 font-display text-4xl font-extrabold md:text-5xl ${light ? "" : "text-primary"}`}>{title}</h2>
    </div>
  );
}
