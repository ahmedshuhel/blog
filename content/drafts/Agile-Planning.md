Planning seems to co-relate with delivery quality. Since we're an agile team, we often forget the importance of good planning. I am not advocating for weeks of just "planning" before starting a new Sprint but one hour of planning (that we do now) seems inadequate to me to understand the complexity of a feature and then come up with a better estimation for that feature given we have varied level of experience in the team.

Often times, while planning, we forget the state and complexity of the current code base and give an estimate that lacks to encompass the re-factoring necessary to implement a feature or a bug fix. In some cases, I see people hack the feature/bug fix in leading more bugs in the future. Given, we committed a timeline, there's only so much you can do as a reviewer.

For experienced developers, continuous refactoring is a given and they are aware of it(I am assuming). But, for junior devs, it's still not in their DNA and I feel like we need to help them understand and exercise it. This lack of continuous refactoring and hacking attitude, in the meanwhile, rotting the codebase slowly and silently leading to big tech debts and hurting the quality of our platform.

Hence, I want to keep a designated day for planning after a sprint ends and before starting a new Sprint. I want the team to go deeper in implementation details after thoroughly understanding the business requirements, see if there's a refactoring necessary while implementing the feature; what code complexity we have in there that might cause pain in short/long term, what inconsistency it might create with other feature in other areas of the system where product might not have much context. I want the team to list out everything that is feasible to implement (including refactoring) in the Sprint within the deadline and most importantly list out all smaller and bigger debts we're leaving behind and properly document them in Confluence so that the leadership is well aware. 

In practice, one day might not be enough but the team can always add one more day from their Sprint if necessary.  Here's how I think it should go:

### Proposed Process
1. The team does this one-hour planning with PO (as they do now):
   - Understand the business requirements thoroughly
   - Understand deadlines or any pressing urgency that needs to be addressed for new/old customers.
   - Leave the meeting with a prioritized list of bugs and features need to be addressed with a rough estimation of how much effort it would take to implement each 
2. The team sits together with Tech Lead and for each new feature/bugfix:
   - Team iron outs any confusion around the business and technical requirements and pre-requisites. (call in PO when/if required)
   - The team looks at the design and identify UX challenges; when there's no design provided list out the UX interactions in details of the feature and communicate with designers. 
   - The team dives deep into implementation details and high-level architecture of the feature where necessary (with codebase open)
   - List out all the necessary refactoring necessary can be done within the Sprint.
   - List out all the debts we are leaving behind
   - Measure and re-adjust the rough estimate.
3. Collaborate with PO/Agile Coach and start the Sprint with:
   - The adjusted estimate
   - Adjusted acceptance criteria
   - List of functional tests needs to be performed per feature.
4. TL (Tech Lead) updates the engineering leadership where/when necessary. 

### Pros
1. Planning done successfully will make author and reviewer and the entire team aligned with the architecture and implementation detail: will help cut down back and forth synchronous/asynchronous communication that's happening a lot now.
2. Continuous refactoring will help keeping the code base healthy and flexible longer than now: adding new feature/changing existing feature will be a lot frictionless.  
3. Planning of that magnitude will make all the team-members aware of all the corner cases: the functional test will be better leading to better software quality.
4. This planning with help reduce the silos of knowledge we have in teams with certain members; will help new members onboard quickly and gain broader knowledge about the system quickly
5. better estimation

### Cons
1. One extra day before a Sprint starts.
2. Such planning can be difficult for large teams (more than 4/5 members): we might employ a divide and conquer approach in such cases.
3. Failure of involving each team-mate by the TL may leave a "we're wasting time" feeling in the teammates
4. This planning session can be longer depending on the list of features/bugs, may leave the team tired/exhausted by the end. And, they may hurry through it leaving the very problem that they wanted to solve in the first place.
