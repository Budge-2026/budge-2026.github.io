import { useId, useState } from 'react'
import { PLACEHOLDERS } from '../../constants/brand'
import { FunnelLink } from '../tracking/FunnelLink'
import { Reveal } from './Reveal'

const SEMA_AVG = 0.149
const TIRZ_AVG = 0.209

export function WeightCalculator({ from }: { from: string }) {
  const [weight, setWeight] = useState(220)
  const inputId = useId()
  const headingId = useId()

  return (
    <section className="section calc-sec" aria-labelledby={headingId}>
      <div className="container calc">
        <Reveal className="calc-copy">
          <div className="arx-kicker arx-kicker--light">
            <span className="arx-dot arx-dot--accent" aria-hidden="true" />
            See the research in your numbers
          </div>
          <h2 id={headingId}>What could the trial results look like for you?</h2>
          <p>
            Move the slider to your current weight. We’ll apply the average results from the STEP 1
            (semaglutide) and SURMOUNT-1 (tirzepatide) trials to it.
            <sup>
              <a href="#calc-fn1">1</a>,<a href="#calc-fn2">2</a>
            </sup>
          </p>
          <p className="calc-note">
            This is an illustration of trial averages, not a prediction or a promise. Your provider
            will set realistic goals with you.
          </p>
        </Reveal>

        <Reveal className="calc-card">
          <label htmlFor={inputId} className="calc-label">
            My current weight <output htmlFor={inputId}>{weight} lbs</output>
          </label>
          <input
            type="range"
            id={inputId}
            className="calc-range"
            min={150}
            max={400}
            step={5}
            value={weight}
            onChange={(event) => setWeight(Number(event.target.value))}
          />
          <div className="calc-results" aria-live="polite">
            <div className="calc-r">
              <span className="calc-n">{Math.round(weight * SEMA_AVG)}</span>
              <span className="calc-u">lbs</span>
              <span className="calc-d">Semaglutide · 14.9% avg at 68 weeks</span>
            </div>
            <div className="calc-r calc-r--hi">
              <span className="calc-n">{Math.round(weight * TIRZ_AVG)}</span>
              <span className="calc-u">lbs</span>
              <span className="calc-d">Tirzepatide 15 mg · 20.9% avg at 72 weeks</span>
            </div>
          </div>
          <p className="calc-goal">Average results, applied to your starting weight.</p>
          <FunnelLink
            className="btn btn-primary calc-cta"
            href={PLACEHOLDERS.glp1FunnelUrl}
            from={from}
            label="Start my 5-minute intake"
            goal="weight"
          >
            Start my 5-minute intake
          </FunnelLink>
        </Reveal>
      </div>

      <div className="container calc-sources">
        <p id="calc-fn1">
          <sup>1</sup> Wilding JPH, et al. Once-weekly semaglutide in adults with overweight or
          obesity (STEP 1). <i>N Engl J Med</i> 2021;384:989–1002. Mean change in body weight at 68
          weeks was −14.9% with semaglutide 2.4 mg versus −2.4% with placebo, alongside lifestyle
          intervention. The trial studied the FDA-approved brand product, not compounded semaglutide.
        </p>
        <p id="calc-fn2">
          <sup>2</sup> Jastreboff AM, et al. Tirzepatide once weekly for the treatment of obesity
          (SURMOUNT-1). <i>N Engl J Med</i> 2022;387:205–216. Mean change in body weight at 72 weeks
          was −15.0% (5 mg), −19.5% (10 mg) and −20.9% (15 mg) versus −3.1% with placebo, alongside
          diet and exercise. The trial studied the FDA-approved brand product, not compounded
          tirzepatide.
        </p>
      </div>
    </section>
  )
}
