export async function getArticles(collection) {
    return collection.find().toArray();
}

export async function createArticle(collection) {
    const data = {
        title: 'the psychology of money',
        slug: 'psychologyofmoney',
        categorie: 'finance',
        imageurl: '',
        date: new Date(),
        text: 'my new book summary',
        content: `<h2 data-heading="book summary">book summary</h2>
        <blockquote>
          <p>Fincancial success is not a hard science. It''s a soft skill, where how you behave is
            more important than what you know.</p>
        </blockquote>
        <h3 data-heading="No one&#39;&#39;s crazy">No one''s crazy</h3>
        <p>Everyone has their own unique experience with how the world works. Things that are
          experienced theirself are more compelling than second-hand learned ones.</p>
        <blockquote>
          <p>Your personal experiences with money make up maybe 0.00000001% of what''s happened in the
            world, but maybe 80% of how you think the world works.</p>
        </blockquote>
        <blockquote>
          <p>Studying history makes you feel like you understand something but until you''ve lived
            through it and personally felt its consequences, you may not understand it enough to change
            your behavior.</p>
        </blockquote>
        <blockquote>
          <p>We all think we know how the world works. But we''ve all only experienced a tiny silver
            of it.</p>
        </blockquote>
        <p>People make decisions bases on their own unique experiences that seem to make sens to
          them in a given moment so no one is crazy.</p>
        <h3 data-heading="Luck &amp; Risk">Luck &amp; Risk</h3>
        <p>Luck and risk are so similar that believe in one without equally respecting the other is
          impossible. They are both the reality that every outcome in life is guided by forces other
          than individual effort.</p>
        <p>That both are so hard to measure makes them too often overlooked.</p>
        <blockquote>
          <p>If you give luck and risk their proper respect, you realize that when judging people''s
            financial success — both your own and other''s — it''s never as good or as bad as it
            seems.</p>
        </blockquote>
        <p>Only focussing on outcomes and what repeatable actions caused them and simultaneously
          overlook the role of random risk and luck that swayes those actions one way or the other
          because our brains prefer easy answers without much appetite for nuance makes identifying
          the traits we should emulate or avoid agonizingly hard.</p>
        <p>This line between bold and reckless can be thin and gets often invisible when there is
          not proper billing given to risk and luck.</p>
        <blockquote>
          <p>The difficulty in identifying what is luck, what is skill, and what is risk is one of
            the biggest problems we face when trying to learn about the best way to manage money.</p>
        </blockquote>
        <ul>
          <li><strong>Be careful who you praise and admire. Be careful who you look down upon and
              wish to avoid becoming.</strong></li>
        </ul>
        <p>Just be careful when assuming that 100% of outcomes can be attributed to effort and
          decisions.</p>
        <ul>
          <li><strong>Therefore, focus less on specific individuals and case studies and more on
              broad patterns.</strong></li>
        </ul>
        <blockquote>
          <p>The more extreme the outcome, the less likely you can apply its lessons to your own
            life, because the more likely the outcome was influenced by extreme ends of luck or
            risk.</p>
        </blockquote>
        <p>To get closer to actionable takeaways look for broad common patterns of success and
          failure, which makes them more applicable to your own life.</p>
        <p>Arrange your financial life in a way that risks won''t wipe you out so you can keep
          playing until the odds fall in your favor.</p>
        <blockquote>
          <p>As much as we recognize the role of luck in success, the role of risk means we should
            forgive ourselves and leave room for understanding when judging failures.</p>
        </blockquote>
        <h3 data-heading="Never enough">Never enough</h3>
        <blockquote>
          <p>There is no reason to risk what you have and need for what you don''t have and don''t
            need.</p>
        </blockquote>
        <ul>
          <li><strong>The hardest financial skill is getting the goalpost to stop
              moving.</strong></li>
        </ul>
        <p>Expectations rise with results so there is no logic in striving for more because you''ll
          feel the same after putting in extra effort. Life isn''t any fun without a sense of enough.
          Happiness is just results minus expectations.</p>
        <ul>
          <li><strong>Social comparision is the problem here.</strong></li>
        </ul>
        <blockquote>
          <p>The ceiling of social comparision is so high that virtually no one will ever hit it.
            Which means it''s a battle that can never be won, or that the only way to win is to not
            fight to begin with — to accept that you might have enough, even if it''s less than those
            around you.</p>
        </blockquote>
        <ul>
          <li><strong>"Enough" is not too little</strong></li>
        </ul>
        <p>The inability to deny a potential dollar will eventually catch up to you.</p>
        <ul>
          <li><strong>There are many things never worth risking, no matter the potential
              gain</strong></li>
        </ul>
        <p>Such things are reputation, freedom and independence, family and friends, being loved by
          those who you want to love you and happiness. You should know when it''s time to stop risks
          that might harm them.</p>
        <h3 data-heading="Confounding Compounding">Confounding Compounding</h3>
        <blockquote>
          <p>The point is that what seem like small changes in growth assumptions can lead to
            ridiculous, impractical numbers.</p>
        </blockquote>
        <p>When compounding isn''t intuitive its potential gets often ignored and solving problems
          happens through focussing on other means. This danger is because we rarely stop to consider
          compounding potential.</p>
        <blockquote>
          <p>Good investing isn''t necessarily about earning the highest returns, because the highest
            returns tend to be one-off hits that can''t be repeated. It''s about earning pretty good
            returns that you can stick with and which can be repeated for the longest period of time.
            That''s when compounding runs wild.</p>
        </blockquote>
        <h3 data-heading="Getting wealthy vs. Staying wealthy">Getting wealthy vs. Staying
          wealthy</h3>
        <p>There''s only one way to stay wealthy: some combination of frugality and paranoia.</p>
        <p>To get money taking risks, being optimistic and putting yourself out there are abviously
          required on the one hand. Keeping money on the other hand requires the opposite of taking
          risk, namely humility, and fear that what you''ve made can be taken away from you just as
          fast. Frugality and an acceptance that at least some of what''ve made is attributable to
          luck, so past success can''t be relied upon to repeat indefinitely lets you staying
          wealthy.</p>
        <blockquote>
          <p>The ability to stick around for a long time, without wiping out or being forced to give
            up, is what makes the biggest difference.</p>
        </blockquote>
        <p>A survival mentality is so key with money because few gains are so great that they''re
          worth wiping yourself out over and getting and keeping that extraordinary growth requires
          surviving all the unpredictable ups and downs that everyone inevitably experiences over
          time.</p>
        <blockquote>
          <p>Having an ''edge'' and surviving are two different things: the first requires the second.
            You need to avoid ruin. At all costs.</p>
        </blockquote>
        <ul>
          <li><strong>Be financially unbreakable instead of wanting big returns. Then you are able to
              stick around long enough for compounding.</strong></li>
        </ul>
        <p>Compounding doesn''t rely on earning the highest returns. Merely good returns sustained
          uninterrupted for the longest period if time — especially in time of chaos and havoc — will
          always win.</p>
        <ul>
          <li><strong>The most important part of every plan is to plan on the plan not going
              according to plan.</strong></li>
        </ul>
        <p>Planning is important but only useful if it can survive reality. And a future filled
          with unknown is everyone''s reality. A good plan embraces unknowness and emphasizes room for
          error.</p>
        <blockquote>
          <p>Many bets fail not because they were wrong, but because they were mostly right in a
            situation that required things to be exactly right. Room for error — often called
            <em>margin of safety</em> — is on of the most underappreciated forces in finance.
          </p>
        </blockquote>
        <p>⚡ Margin of safety is raising the odds of success at a given level of risk by
          increasing your chances of survival.</p>
        <ul>
          <li><strong>Being optimistic about the future, but paranoid about what will prevent you
              from getting to the future is vital</strong></li>
        </ul>
        <blockquote>
          <p>A mindset that can be paranoid and optimistic at the same time is hard to maintain,
            because seeing things as black or white takes less effort than accepting nucance. But
            short-term paranoia is needed to keep yourself alive long enough to exploit long-term
            optimism.</p>
        </blockquote>
        <h3 data-heading="Tails, You Win">Tails, You Win</h3>
        <blockquote>
          <p>Long tails — the farthest ends of a distribution of outcomes — have tremendous influence
            in finance, where a small number of events can account for the majority of outcomes.</p>
        </blockquote>
        <blockquote>
          <p>Anything that is huge, profitable, famous, or influential is the result of a tail event
            — an outlying one-in-thousands or millions event. And most of our attention goes to things
            that are huge, profitable, famous, our influential.</p>
        </blockquote>
        <blockquote>
          <p>Your success as an investor will be determined by how you respond to punctuated moments
            of terror, not the years spent on cruise control. A good definition of an investing genius
            is the man or woman who can do the average thing when all those around them are going
            crazy. Tails drive everything.</p>
        </blockquote>
        <blockquote>
          <p>It''s not wether you''re right or wrong that''s important, but how much money you make when
            you''re right and how much lose when you''re wrong. — George Soros</p>
        </blockquote>
        <blockquote>
          <p>You can be wrong half the time and still make a fortune.</p>
        </blockquote>
        <h3 data-heading="Freedom">Freedom</h3>
        <p>Money''s greates intrinsic value is its ability to give you control over your time.
          Unspent assets give you greater control over what you can do and when you can do it so it
          increases your level of independence and autonomy.</p>
        <p>Using money to buy time and options is much more valuable than a few luxury goods.</p>
        <blockquote>
          <p>Controlling your time is the highest dividend money pays.</p>
        </blockquote>
        <h3 data-heading="Man in the Car Paradox">Man in the Car Paradox</h3>
        <p>🤑 People tend to want wealth to signal to others that they should be liked and admired.
          But in reality those other people often bypass admiring you, not because they don''t think
          wealth is admirable, but because they use your wealth as a benchmark for their own desidre
          to be liked and admired.</p>
        <p>Using money to buy fancy things may bring less respect and admiration that you would
          imagine first. You should be careful how you seek these goals.</p>
        <blockquote>
          <p>Humility, kindness, and empathy will bring you more respect than horespower ever
            will.</p>
        </blockquote>
        <h3 data-heading="Wealth is What You Don&#39;&#39;t See">Wealth is What You Don''t See</h3>
        <blockquote>
          <p>Spending money to show people how much money you have is the fastest way to have less
            money.</p>
        </blockquote>
        <p>👀 We tend to judge wealth by what we see, because that''s the information we have in
          front of us. But the truth is that wealth is what you don''t see. Wealth is financial assets
          that haven''t yet been converted into the stuff you see.<br>
        </p>
        <blockquote>
          <p>The only way to be wealthy is to not spend the money that you do have. It''s not just the
            only way to accumulate wealth; it''s the very definition of wealth.</p>
        </blockquote>
        <p>Wealth is hidden because it''s income not spent. It''s an option not yet taken to buy
          something later. Its value lies in offering options, flexibility, and growth to one day
          purcase more stuff than it would be possible right now.</p>
        <blockquote>
          <p>The world is filled with people who look modest but are actually wealthy and people who
            look rich who live at the razor''s edge of insolvency.</p>
        </blockquote>
        <h3 data-heading="Save Money">Save Money</h3>
        <p>Building wealth has little to do with your income or investment returns, and lots to do
          with your savings rate.</p>
        <p>Personal savings and frugality are parts of the money equation that are more in your
          control and are as effectice in the future as they are today.</p>
        <blockquote>
          <p>Wealth is just the accumulated leftovers after you spend what you take in.</p>
        </blockquote>
        <p>More importantly, the value of wealth is relative to what you need. Learning to be happy
          with less money creates a gap between what you have and what you want.</p>
        <blockquote>
          <p>There are professional investors who grind 80 hours a week to add a tenth of a
            percentage point to their returns when there are two or three full percentage points of
            lifestyle bloat in their finances that can be exploited with less effort.</p>
        </blockquote>
        <p>Past a certain level of income one of the most powerful ways to increase your savings
          isn''t to raise income but humility because you need what sits below your ego.</p>
        <blockquote>
          <p>People with enduring personal finance success — not necessarily those with high incomes
            — tend to have a propensity to not give a damn what others think about them.</p>
        </blockquote>
        <p>The less you care about what other think of you the less you will desire to the ability
          to save is more in your control than you might think.</p>
        <p>In a predictable world only saving for a specific goal makes sense but ours isn''t. You
          don''t need a specific reason to save.</p>
        <blockquote>
          <p>Saving is a hedge againts life''s inevitable ability to surprise the hell out of you at
            the worst possible moment.</p>
        </blockquote>
        <p>Intangible benefits of money can be far more valuable and capable of increasing
          happiness that tangible things that are abious targets of savings. Intangible stuff tend to
          go unnoticed but savings without a spending goals generates options and flexibility, the
          ability to wait and the opportunity to pounce, time to think and to change course on own
          terms.</p>
        <blockquote>
          <p>Every bit of savings is like taking a point in the future that would have beeon owned by
            someone else and giving it back to yourself.</p>
        </blockquote>
        <p>Don''t having control over your time forces you to accept whatever bad luck is thrown
          your way. With flexibility and the time to wait for opportunities to fall in your lap is
          the hidden return on savings and it is becoming more important. Flexibility is a reliable
          advantage in a world that''s become connected as ours has not intelligence.</p>
        <blockquote>
          <p>Having more control over your time and options is becoming one of the most valuable
            currencies in the world.</p>
        </blockquote>
        <h3 data-heading="Reasonable &gt; Rational">Reasonable &gt; Rational</h3>
        <p>💟 Do not aim to be coldly rational when making financial decisions. Aim to just be
          pretty reasonable. Reasonable is more realistic and you have a better chance of sticking
          with it for the long run, which is what matters most when managing money.</p>
        <p>Investing''s social component is often ignored when viewing is through a strictly
          financial lens.</p>
        <blockquote>
          <p>What''s often overlooked in finance is that something can be technically true but
            contextually nonsense.</p>
        </blockquote>
        <p>Reasonable investors who love their technically imperfect strategies have an edge,
          because they''re more likely to stick with those strategies and anything that keeps you in
          the game has a quantifiable advantage.</p>
        <p>Feeling like you''re part of something meaningful can be the necessary motivation in
          investing in a company.</p>
        <p>Day trading and individual stock picking is not rational for most investors because the
          odds are heavily against your success but they''re both reasonable in small amounts if they
          lead to leave the rest of your more diversified investments alone.</p>
        <h3 data-heading="Surprise!">Surprise!</h3>
        <blockquote>
          <p>Things that have never happened before happen all the time.</p>
        </blockquote>
        <p>⏱ "historians as prophets" fallacy: An over reliance on past data is a signal to future
          conditions in a field where innovation and change are the lifeblood of progress.</p>
        <p>Investing is not a hard science because it''s massive group of people making imperfect
          decisions with limited information about things that will have a massive impact on their
          wellbeing, which can make even smart people nervous, greedy and paranoid.</p>
        <blockquote>
          <p>Experiencing specific events does not necessarily qualify you to know what will happen
            next. In fact it rarely does, because experience leads to overconfidence more than
            forecasting ability.</p>
        </blockquote>
        <blockquote>
          <p>Realizing the future might not look anything like the past is a special kind of skill
            that is not generally looked highly upon by the financial forecasting community.</p>
        </blockquote>
        <p>😯 The correct lesson to learn from surprises is that the world is surprising. Not that
          we should use past surprises as a guide to future boundaries; that we should use past
          surprises as an admission that we have no idea what might happen next. Surprises moving the
          needle the most is the one forecast that''s been accurate at virtually every point in
          history.<br>
          <br>
          History doesn''t account structural changes that are relevant to today''s world to they can
          be a misleading guide to the future, but that doesn''t mean we should ignore history when
          thinking about money. The important nuance is that the further back in history we look, the
          more general our takeaways should be (people''s relationship to greed and fear, how they
          behave under stress, and how they respond to incentives tend to be stable in time).
        </p>
        <h3 data-heading="Room for Error">Room for Error</h3>
        <blockquote>
          <p>You have to give yourself room for error. You have to plan on your plan not going
            according to plan.</p>
        </blockquote>
        <p>Acknowledging that unvertainty, randomness, and chance are ever-present part of life is
          the wisdom in having room for error.</p>
        <blockquote>
          <p>To only way to deal with them is by increasing the gap between what you think will
            happen and what can happen while still leaving you capable of fighting another day.</p>
        </blockquote>
        <p>❗ Margin of safety — you can also call it room for error or redundancy — is the only
          effective way to safely navigate a world that is governed by odds, not certainties. And
          almost everything related to money exists in that kind of world.</p>
        <blockquote>
          <p>Margin of safety is a simple suggestion that we don''t need to view the world in front of
            us as black or white, predictable or crapshoot. The gray area — pursuing things where a
            range of potential outcomes are acceptable — is the smart way to proceed.</p>
        </blockquote>
        <p>It lets you endure a range of potential outcomes, and endurance lets you stick long
          enough to let the odds of benefiting from a low-probability outcome fall in your favor.</p>
        <blockquote>
          <p>Having a gap between what you can technically endure versus what''s emotionally possible
            is an overlooked version of room for error.</p>
        </blockquote>
        <p>A gap gives you emotional safety to not become exhausted when financial losses
          happen.</p>
        <p>Also use room for error in predictions when estimating future returns which is more art
          than science.</p>
        <blockquote>
          <p>The best way to achieve felicity is to aim low — Charlie Munger</p>
        </blockquote>
        <p>The core idea is that taking risks to get ahead is possible, but no risk that can wipe
          you out is ever worth taking. Just ensure that you can remain standing long enough for your
          risks to pay off. You have to survive to succeed.</p>
        <p>Avoiding all kinds of unknown risks is impossible because you can''t prepare for what you
          can''t envision. If there''s one way to protect against their damage it would be avoiding
          single points of failure.</p>
        <blockquote>
          <p>A good rule of thumb for a lot of things in life is that everything that can break will
            eventually break.</p>
        </blockquote>
        <h3 data-heading="You&#39;&#39;ll change">You''ll change</h3>
        <blockquote>
          <p>An underpinning of psychology is that people are poor forecasters of their future
            selves.</p>
        </blockquote>
        <p>Therefore it''s very hard to make enduring long-term decision when your view of what
          you''ll want in the future is very likely to shift.</p>
        <p>As a result we should avoid the extreme ends of financial planning.</p>
        <blockquote>
          <p>Endurance is key. And when you consider our tendency to change who we are over time,
            balance at every point in your life becomes a strategy to avoid future regret and encourage
            endurance.</p>
        </blockquote>
        <p>And we should also come to accept the reality of changing our minds.</p>
        <blockquote>
          <p>Sunk costs — anchoring decisions to past efforts that can''t be rufunded — are a devil in
            a world where people change over time. They make our future selves prisoners to our past,
            different, selves. It''s the equivalent of a stranger making major life decisions for
            you.</p>
        </blockquote>
        <blockquote>
          <p>Embracing the idea that financial goals made when you were a different person should be
            abandoned without mercy versus put on life support and dragged on can be a good strategy to
            minimize future regret.</p>
        </blockquote>
        <h3 data-heading="Nothing&#39;&#39;s Free">Nothing''s Free</h3>
        <blockquote>
          <p>Most things are harder in practice than they are in theory.</p>
        </blockquote>
        <blockquote>
          <p>Like everything else worthwhile, successful investing demands a price. But its currency
            is not dollars and cents. It''s volatility, fear, doubt, uncertainty, and regret — all of
            which are easy to overlook until you''re dealing with them in real time.</p>
        </blockquote>
        <p>The irony is that by trying to avoid the price by buying and selling, investors end up
          paying double.</p>
        <blockquote>
          <p>The price of investing success is not immediately obvious. Market returns are never free
            and never will be. They demand you pay a price, like any other product.</p>
        </blockquote>
        <p>You''ll get usually what you pay for in markets. The price for returns (volatility,
          uncertainity, fee) is the cost of admission to get returns greater than low-fee parks (like
          cash and bonds).</p>
        <blockquote>
          <p>The trick is convincing yourself that the market''s fee is worth it. That''s the only way
            to properly deal with volatility and uncertainty — not just putting up with it, but
            realizing that it''s an admission fee worth paying.</p>
        </blockquote>
        <h3 data-heading="You &amp; Me">You &amp; Me</h3>
        <blockquote>
          <p>Investors often innocently take cues from other investors who are playing a different
            game than they are.</p>
        </blockquote>
        <p>But you should be careful. When investors have different goals and time horizons prices
          that look ridiculous to one person can make sense to another, because the factors those
          investors pay attention to are different.</p>
        <p>📈 An iron rule of finance is that money chases returns to the greatest extent that it
          can.<br>
        </p>
        <blockquote>
          <p>The formation of bubbles isn''t so much about people irrationally participating in
            long-term investing. They''re about people somewhat rationally moving toward short-term
            trading to capture momentum that had been feeding on itself. Bubbles do their damage when
            long-term investors playing on game start taking their cues from those short-term traders
            playing another.</p>
        </blockquote>
        <p>Many finance and investment decisions are rooted in watching other people''s behavior and
          either copying it or betting against it. But when you don''t know why someone behaves like
          they do you won''t know how long they''ll continue acting that way, or what will make them
          change their mind.</p>
        <blockquote>
          <p>It''s hard to grasp that other investors have different goals than we do, because an
            anchor of psychology is not realizing that rational people can see the world through a
            different lens than your own.</p>
        </blockquote>
        <blockquote>
          <p>Being swayed by people playing a different game can also throw off how you think you''re
            supposed to spend your money.</p>
        </blockquote>
        <p>⏳ Few things matter more with money than understanding your own time horizon and not
          being persuaded by the actions and behaviors of people playing different games than you
          are. Identify what game you''re playing.</p>
        <h3 data-heading="The Seduction of Pessimism">The Seduction of Pessimism</h3>
        <blockquote>
          <p>Pessimism isn''t just more common that optimism it also sounds smarter. It''s
            intellectually captivating, and it''s paid more attention than optimism, which is often
            viewed as being oblivious to risk. Pessimism just sounds smarter and more plausible than
            optimism.</p>
        </blockquote>
        <p>😌 Optimism is a belief that the odds of a good outcome are in your favor over time,
          even when there will be setbacks along the way.</p>
        <p>Things which make financial pessimism easy, common, and more persuasive than
          optimism:</p>
        <ul>
          <li>Money is ubiquitous, so something bad happening tends to affect everyone and captures
            everyone''s attention.</li>
        </ul>
        <p>It''s a connected system where one person''s decision can affect everyone else and
          therefore it''s understandable why financial risks gain a spotlight and capture attention in
          a way few other topics can.</p>
        <ul>
          <li>Another is that pessimists often extrapolate present trends without accounting for how
            markets adapt</li>
        </ul>
        <p>📉 There is an iron law in economics: extremely good and extremely bad circumstances
          rarely stay that way for long because supply and demand adapt in hard-to-predict ways.</p>
        <p>Problems correct and people adapt. Threats incentivize solutions in equal magnitude.</p>
        <ul>
          <li>A third is that progress happens too slowly to notice, but setbacks happen to quickly
            to ingore.</li>
        </ul>
        <blockquote>
          <p>Growth is driven by compounding, which always takes time. Destruction is driven by
            single points of failure, which can happen in seconds, and loss of confidence, which can
            happen in an instant.</p>
        </blockquote>
        <p>This underscores that in investing you must indetify the price of success — volatility
          and loss amid the long backdrop of growth — and be willing to pay it.</p>
        <blockquote>
          <p>Expecting things to be great means a best-case scenario that feels flat. Pessimism
            reduces expectations, narrowing the gap between possible outcomes and outcomes you feel
            great about. Maybe that''s why it''s so seductive. Expecting things to be bad is the best way
            to be pleasantly surprised when they''re not.</p>
        </blockquote>
        <h3 data-heading="When You&#39;&#39;ll Believe Anything">When You''ll Believe Anything</h3>
        <blockquote>
          <p>Stories are, by far, the most powerful force in the economy. They are the fuel that can
            let the tangible parts of the economy work, or the brake that holds our capabilities
            back.</p>
        </blockquote>
        <p>Things to keep in mind about a story-driven world when managing your money:</p>
        <ul>
          <li>The more you want something to be true, the more likely you are to believe a story that
            overestimates the odds of it being true.</li>
        </ul>
        <p>"Appealing fictions" are things in life that we think are true because we desperately
          want them to be true. They happen when you are smart, you want to find solutions, but face
          a combination of limited control and high stakes. They are extremely powerful because they
          can make you believe just about anything.</p>
        <blockquote>
          <p>The bigger the gap between that you want to be true and what you need to be true to have
            an acceptable outcome, the more you are protecting yourself from falling victim to an
            appealing financial fiction.</p>
        </blockquote>
        <blockquote>
          <p>The biggest risk is that you want something to be true so badly that the range of your
            forecast isn''t even in the same ballpark as reality.</p>
        </blockquote>
        <blockquote>
          <p>Incentives are a powerful motivatior, and we should always remember how they influence
            our own financial goals and outlooks. It can''t be overstated: there is no greater force in
            finance than room for error, and the higher the stakes, the wider it should be.</p>
        </blockquote>
        <ul>
          <li>Everyone has an incomplete view of the world. But we form a complete narrative to fill
            in the gaps.</li>
        </ul>
        <p>People come up with explanations that makes sense based on their own unique perspective
          and experiences in the world, when being confronted with something they don''t understand so
          they do not realize they don''t understand it.</p>
        <blockquote>
          <p>We all want the complicated world we live in to make sense. So we tell ourselves stories
            to fill in the gaps of what are effectively blind spots.</p>
        </blockquote>
        <blockquote>
          <p>Comming to terms with how much you don''t know means coming to terms with how much of
            what happens in the world it out of your control. And that can be hard to accept.</p>
        </blockquote>
        <blockquote>
          <p>Wwanting to believe we are in control is an amotional itch that needs to be scratched,
            rather than an analytical problem to be calculated and solved. The illusion of control is
            more persuasive than the reality of uncertainty. So we cling to stories about outcomes
            being in our control.</p>
        </blockquote>
        <blockquote>
          <p>We don''t wander around blind and confused. We have to think the world we operate in
            makes sense based on what we happen to know.</p>
        </blockquote>
        <h3 data-heading="All Together Now">All Together Now</h3>
        <p>Although there exists universal truths in money, people come to different conclusion
          about how they want to apply those to their own finances.</p>
        <ol>
          <li>Go out of your way to find humility when things are going right and
            forgiveness/compassion when they go wrong.</li>
          <li>Less ego, more wealth.</li>
          <li>Manage your money in a way that helps you sleep at night.</li>
          <li>If you want to do better as an investor, the single most powerful thing you can do is
            increase your time horizon.</li>
          <li>Become OK with a lot if things going wrong. you can be wrong half the time and still
            make a fortune.</li>
          <li>Use money to gain control over your time.</li>
          <li>Be nicer and less flashy.</li>
          <li>Save. Just save. You don''t need a specific reason to save.</li>
          <li>Define the cost of success and be ready to pay it.</li>
          <li>Worship room for error.</li>
          <li>Avoid the extreme ends of financial decisions.</li>
          <li>You should like risk because it pays off over time.</li>
          <li>Define the game you''re playing.</li>
          <li>Respect the mess.</li>
        </ol>
        <h3 data-heading="Confessions">Confessions</h3>
        <blockquote>
          <p>There is no universal truth. There''s only what works for you and your family, checking
            the boxes you want checked in a way that leaves you comfortable and sleeping well at
            night.</p>
        </blockquote>
        <blockquote>
          <p>What works for one person may not work for another. You have to find what works for
            you.</p>
        </blockquote>
      </div>`
    }

    await collection.insertOne(data);
}


/* export const getArticles = (con) => (req, res) => {
    //console.log(req.query.categorie);
    let sql = "SELECT * FROM blog ";
    if (req.query.title != null) {
        sql += "WHERE title LIKE '%" + req.query.title + "%'";
    }
    if (req.query.categorie != null) {
        if (req.query.title != null) {
            sql += " and ";
        } else {
            sql += "WHERE "
        }
        //sql += "categorie='" + req.query.categorie + "'";
        sql += "categorie in (" + req.query.categorie + ")"
    }
    if (req.query.slug != null) {
        //console.log(req.query.slug);
        sql = "SELECT * FROM blog WHERE slug='" + req.query.slug + "'";
    }
    //console.log(sql);

    con.query(sql, (err, results) => {
        if (err) throw err;
        res.json(results);
    })
}



export const createArticle = (con) => (req, res) => {
    let sqlreadycontent = req.body.content.replace(/'/g, "''").replace(/"/g, '\\"');
    let sql = 'INSERT INTO blog (categorie, title, imageurl, slug, text, content) VALUES ("' + req.body.categorie + '" , "' + req.body.title + '", "' + req.body.imageurl + '" , "' + req.body.slug + '" , "' + req.body.text + '", "' + sqlreadycontent + '")'

    con.query(sql, (err, result) => {
        if (err) throw err;
        console.log('blog article "' + req.body.title + '" created');
    });

    res.json('article posted');
} */

/* module.exports = {
    getArticles,
    createArticle
} */