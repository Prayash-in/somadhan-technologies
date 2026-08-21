import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { MailGlyph } from "@/components/glyphs";
import { ViewTransition } from "react";
import { tones } from "@/components/tone";
import { members, values } from "@/content/team";

export const metadata = {
  title: "Team & Careers",
  description:
    "The people behind Somadhan Technologies — engineers, researchers and operators building inclusive technology for the real world.",
};

const avatarTones = ["green", "gold", "sky", "terra", "sky", "gold", "green"] as const;

const valueTones = ["green", "gold", "sky", "terra"] as const;

export default function TeamPage() {
  return (
    <ViewTransition name="page">
      <PageHero
        eyebrow="Team"
        title={
          <>
            Problem solvers at heart.{" "}
            <em className="text-gradient animate-shimmer">
              Builders by craft.
            </em>
          </>
        }
        description="A multidisciplinary team of engineers, researchers, trainers and administrators — united by one goal: intelligent technology that works for everyone."
      />

      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <h2 className="font-display text-2xl font-medium tracking-tight sm:text-3xl">
          The people
        </h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {members.map((member, i) => {
            const tone = tones[avatarTones[i % avatarTones.length]];
            return (
              <Reveal key={member.name} delay={i * 0.04} className="h-full">
                <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-paper p-8 transition-all hover:-translate-y-1 hover:border-transparent hover:shadow-xl hover:shadow-ink/10">
                  <div
                    aria-hidden="true"
                    className={`absolute inset-x-0 top-0 h-1 bg-linear-to-r ${tone.topBar} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                  />
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl font-display text-lg font-medium text-white shadow-md ${tone.tile}`}
                  >
                    {member.initials}
                  </div>
                  <h3 className="mt-6 font-display text-lg font-medium">
                    {member.name}
                  </h3>
                  <p className={`mt-1 text-sm font-medium ${tone.text}`}>
                    {member.role}
                  </p>
                  {member.focus ? (
                    <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                      {member.focus}
                    </p>
                  ) : null}
                  {member.email ? (
                    <div className="mt-auto">
                      <a
                        href={`mailto:${member.email}`}
                        aria-label={`Email ${member.name}`}
                        className="mt-5 flex h-9 w-9 items-center justify-center rounded-lg bg-accent-soft text-accent transition-all hover:bg-accent hover:text-white"
                      >
                        <MailGlyph className="h-4 w-4" />
                      </a>
                    </div>
                  ) : null}
                </div>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-20 sm:mt-28">
          <h2 className="font-display text-2xl font-medium tracking-tight sm:text-3xl">
            How we work
          </h2>
          <div className="mt-10 grid gap-x-12 gap-y-10 sm:grid-cols-2">
            {values.map((value, i) => {
              const tone = tones[valueTones[i % valueTones.length]];
              return (
                <Reveal key={value.title} delay={i * 0.05}>
                  <div className="group border-t-2 border-line pt-6 transition-colors hover:border-transparent">
                    <div
                      aria-hidden="true"
                      className={`h-1 w-10 rounded-full bg-linear-to-r ${tone.topBar} transition-all duration-300 group-hover:w-16`}
                    />
                    <h3 className="mt-4 font-display text-lg font-medium">
                      {value.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                      {value.body}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </ViewTransition>
  );
}