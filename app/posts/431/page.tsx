import { Metadata } from 'next'
import PostLayout from '@/components/post/layout'
import PostSection from '@/components/post/section'
import Grid from '@/components/post/grid'
import PostCard from '@/components/post/card'
import CodeBlock from '@/components/post/code-block'

export const metadata: Metadata = {
  title: 'Unity Game Development - 2D Platformer with Procedural Generation',
  description:
    'A comprehensive game development project showcasing Unity mastery, C# programming, procedural level generation, and complete project lifecycle management from concept to published game.',
}

export default function UnityGameDevelopmentPage() {
  return (
    <>
      <PostLayout
        title="Unity Game Development Project"
        description="A complete 2D platformer game built from scratch using Unity and C#, featuring procedural level generation, advanced animations, and comprehensive project management methodology. Developed as part of Module 431 with zero prior Unity experience."
        tags={[
          { label: 'Unity Engine', variant: 'blue' },
          { label: 'C# Programming', variant: 'green' },
          { label: 'Game Development', variant: 'purple' },
          { label: 'Procedural Generation', variant: 'orange' },
        ]}
      >
        {/* Project Introduction */}
        <PostSection title="Project Overview">
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-neutral-100 mb-4">Learning Journey & Motivation</h3>
            <p className="text-neutral-300 mb-4">
              Module 431 presented the perfect opportunity to step outside our comfort zone and tackle something we had 
              always wanted to learn: game development with Unity. Despite having no prior experience with Unity or C#, 
              we leveraged our strong Java programming foundation to master a completely new development environment.
            </p>
            <p className="text-neutral-300 mb-6">
              Working as a collaborative team, we embarked on creating a 2D platformer from concept to published game, 
              implementing advanced features like procedural level generation, complex animation systems, and professional 
              project management practices.
            </p>

            <Grid cols={3}>
              <PostCard tint="blue">
                <h4 className="font-medium text-blue-300 mb-2">Technologies Mastered</h4>
                <p className="text-blue-200/80 text-sm">Unity Engine, C# scripting, animation systems, physics</p>
              </PostCard>
              <PostCard tint="green">
                <h4 className="font-medium text-green-300 mb-2">Project Duration</h4>
                <p className="text-green-200/80 text-sm">10 weeks of intensive development and learning</p>
              </PostCard>
              <PostCard tint="purple">
                <h4 className="font-medium text-purple-300 mb-2">Final Outcome</h4>
                <p className="text-purple-200/80 text-sm">Published game with procedural generation</p>
              </PostCard>
            </Grid>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-neutral-100 mb-4">Game Concept & Features</h3>
            <p className="text-neutral-300 mb-6">
              &quot;Knightaro&quot; is a 2D action platformer featuring a knight character navigating through procedurally 
              generated levels, battling enemies, collecting coins, and surviving challenging obstacles.
            </p>

            <Grid cols={2}>
              <PostCard>
                <h4 className="font-medium text-lg mb-3">Core Gameplay Features</h4>
                <ul className="text-neutral-400 text-sm space-y-1">
                  <li>• Smooth character movement and jumping mechanics</li>
                  <li>• Combat system with multiple attack animations</li>
                  <li>• Enemy AI with health systems and dynamic behavior</li>
                  <li>• Collectible coins and health power-ups</li>
                  <li>• High score tracking and persistence</li>
                  <li>• Immersive background music and sound effects</li>
                </ul>
              </PostCard>
              <PostCard>
                <h4 className="font-medium text-lg mb-3">Technical Innovations</h4>
                <ul className="text-neutral-400 text-sm space-y-1">
                  <li>• Procedural level generation system</li>
                  <li>• Complex state-machine driven animations</li>
                  <li>• Physics-based character controller</li>
                  <li>• Dynamic camera following system</li>
                  <li>• Collision detection and response system</li>
                  <li>• Cross-platform deployment (PC & Android)</li>
                </ul>
              </PostCard>
            </Grid>
          </div>
        </PostSection>

        {/* Research & Planning Phase */}
        <PostSection title="Research &amp; Planning Phase">
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-neutral-100 mb-4">Game Concept Development</h3>
            <p className="text-neutral-300 mb-6">
              Our planning began with extensive brainstorming sessions, exploring various game genres and concepts 
              before settling on our final direction through systematic analysis.
            </p>

            <PostCard className="mb-6">
              <h4 className="text-lg font-medium text-neutral-100 mb-4">Initial Brainstorming Results</h4>
              <Grid cols={2}>
                <div>
                  <h5 className="font-medium text-neutral-200 mb-2">2D Game Concepts</h5>
                  <ul className="text-neutral-400 text-sm space-y-1">
                    <li>• Platform-based movement and jumping</li>
                    <li>• Enemy encounters and combat</li>
                    <li>• Weapon systems and power-ups</li>
                    <li>• Obstacle navigation and environmental hazards</li>
                    <li>• Collectible currency and unlockable content</li>
                    <li>• Progressive difficulty and level advancement</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-neutral-200 mb-2">Advanced Features Considered</h5>
                  <ul className="text-neutral-400 text-sm space-y-1">
                    <li>• Dynamic weather systems</li>
                    <li>• Vehicle-based gameplay segments</li>
                    <li>• Environmental storytelling elements</li>
                    <li>• Developer mode for testing and debugging</li>
                    <li>• Procedural level generation algorithms</li>
                  </ul>
                </div>
              </Grid>
            </PostCard>

            <div className="mb-8">
              <h4 className="text-lg font-medium text-neutral-100 mb-3">Unity Engine Mastery</h4>
              <p className="text-neutral-300 mb-4">
                Learning Unity from scratch required understanding its component-based architecture and 
                visual development environment. Key concepts mastered included:
              </p>

              <Grid cols={2}>
                <PostCard tint="blue">
                  <h5 className="font-medium text-blue-300 mb-2">Core Unity Concepts</h5>
                  <ul className="text-blue-200/80 text-sm space-y-1">
                    <li>• Scene hierarchy and GameObject management</li>
                    <li>• Inspector window and component attachment</li>
                    <li>• Rigidbody physics and collision detection</li>
                    <li>• Asset Store integration and resource management</li>
                    <li>• Prefab systems for reusable game objects</li>
                  </ul>
                </PostCard>
                <PostCard tint="green">
                  <h5 className="font-medium text-green-300 mb-2">Advanced Features</h5>
                  <ul className="text-green-200/80 text-sm space-y-1">
                    <li>• Animation state machines and blend trees</li>
                    <li>• Trail renderers for visual effects</li>
                    <li>• Custom C# scripting for game logic</li>
                    <li>• Camera controls and following systems</li>
                    <li>• Audio system integration and management</li>
                  </ul>
                </PostCard>
              </Grid>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-neutral-100 mb-4">Project Management Strategy</h3>
            <p className="text-neutral-300 mb-6">
              We implemented professional project management practices using Trello for task organization 
              and Gantt charts for timeline management.
            </p>

            <PostCard className="mb-6">
              <h4 className="text-lg font-medium text-neutral-100 mb-4">Trello Board Organization</h4>
              <img src="/images/posts/431/trello-board.png" alt="Trello Board Screenshot" className="mb-4 rounded border border-neutral-700" />
              <div className="mt-4">
                <h5 className="font-medium text-neutral-200 mb-2">Color-Coded Task Categories</h5>
                <Grid cols={3}>
                  <div className="text-center">
                    <div className="w-4 h-4 bg-yellow-500 rounded-full mx-auto mb-1"></div>
                    <span className="text-sm text-neutral-400">General Tasks</span>
                  </div>
                  <div className="text-center">
                    <div className="w-4 h-4 bg-orange-500 rounded-full mx-auto mb-1"></div>
                    <span className="text-sm text-neutral-400">Documentation</span>
                  </div>
                  <div className="text-center">
                    <div className="w-4 h-4 bg-red-500 rounded-full mx-auto mb-1"></div>
                    <span className="text-sm text-neutral-400">Enemy Systems</span>
                  </div>
                  <div className="text-center">
                    <div className="w-4 h-4 bg-violet-500 rounded-full mx-auto mb-1"></div>
                    <span className="text-sm text-neutral-400">User Interface</span>
                  </div>
                  <div className="text-center">
                    <div className="w-4 h-4 bg-blue-500 rounded-full mx-auto mb-1"></div>
                    <span className="text-sm text-neutral-400">Scene / World</span>
                  </div>
                  <div className="text-center">
                    <div className="w-4 h-4 bg-green-700 rounded-full mx-auto mb-1"></div>
                    <span className="text-sm text-neutral-400">Player</span>
                  </div>
                  <div className="text-center">
                    <div className="w-4 h-4 bg-green-400 rounded-full mx-auto mb-1"></div>
                    <span className="text-sm text-neutral-400">Info</span>
                  </div>
                </Grid>
              </div>
            </PostCard>

            <PostCard className="mb-6">
              <h4 className="text-lg font-medium text-neutral-100 mb-4">Project Timeline (Gantt Chart)</h4>
                <img src="/images/posts/431/gantt-chart.png" alt="Gantt Chart Screenshot" className="mb-4 rounded border border-neutral-700" />
              <div className="mt-4 grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h5 className="font-medium text-neutral-200 mb-2">Administrative Phase</h5>
                  <ul className="text-neutral-400 space-y-1">
                    <li>• Preference matrix development</li>
                    <li>• Gantt diagram creation</li>
                    <li>• Utility analysis completion</li>
                    <li>• Documentation framework setup</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-neutral-200 mb-2">Technical Implementation</h5>
                  <ul className="text-neutral-400 space-y-1">
                    <li>• Unity fundamentals and C# learning</li>
                    <li>• Core game mechanics implementation</li>
                    <li>• Animation systems and visual effects</li>
                    <li>• Testing and quality assurance</li>
                  </ul>
                </div>
              </div>
            </PostCard>
          </div>
        </PostSection>

        {/* Decision Making Process */}
        <PostSection title="Decision Making &amp; Analysis">
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-neutral-100 mb-4">Preference Matrix Analysis</h3>
            <p className="text-neutral-300 mb-6">
              We employed a systematic decision-making approach using preference matrices to evaluate project goals 
              across three key stakeholder categories: operational, personal, and coaching objectives.
            </p>

            <PostCard className="mb-6">
              <h4 className="text-lg font-medium text-neutral-100 mb-4">Stakeholder Goal Categories</h4>
              <Grid cols={3}>
                <PostCard tint="blue">
                  <h5 className="font-medium text-blue-300 mb-2">Operational Goals</h5>
                  <ul className="text-blue-200/80 text-sm space-y-1">
                    <li>• New Learning (13.89%)</li>
                    <li>• Feasibility (13.89%)</li>
                  </ul>
                </PostCard>
                <PostCard tint="green">
                  <h5 className="font-medium text-green-300 mb-2">Personal Goals</h5>
                  <ul className="text-green-200/80 text-sm space-y-1">
                    <li>• Enjoyment (8.33%)</li>
                    <li>• Presentation Quality (0%)</li>
                    <li>• Cost Management (2.78%)</li>
                  </ul>
                </PostCard>
                <PostCard tint="purple">
                  <h5 className="font-medium text-purple-300 mb-2">Coaching Goals</h5>
                  <ul className="text-purple-200/80 text-sm space-y-1">
                    <li>• Scalability (11.11%)</li>
                    <li>• Enhancement Capability (8.33%)</li>
                    <li>• Timeline Management (19.44%)</li>
                    <li>• Goal Clarity (22.22%)</li>
                  </ul>
                </PostCard>
              </Grid>
            </PostCard>

            <div className="mb-8">
              <h4 className="text-lg font-medium text-neutral-100 mb-3">Utility Analysis Results</h4>
              <p className="text-neutral-300 mb-4">
                After systematic evaluation of three game concepts, the 2D platformer emerged as the clear winner 
                with a 13.2% advantage over the second-place option.
              </p>

              <PostCard>
                <h5 className="font-medium text-neutral-200 mb-3">Final Scoring Results</h5>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-neutral-300">2D Platformer</span>
                    <div className="flex items-center">
                      <div className="w-32 bg-neutral-700 rounded-full h-2 mr-3">
                        <div className="bg-green-500 h-2 rounded-full" style={{width: '88%'}}></div>
                      </div>
                      <span className="text-green-400 font-medium">880.56 points</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-neutral-300">Tank Battle Royale</span>
                    <div className="flex items-center">
                      <div className="w-32 bg-neutral-700 rounded-full h-2 mr-3">
                        <div className="bg-blue-500 h-2 rounded-full" style={{width: '73%'}}></div>
                      </div>
                      <span className="text-blue-400 font-medium">727.78 points</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-neutral-300">3D Shooter</span>
                    <div className="flex items-center">
                      <div className="w-32 bg-neutral-700 rounded-full h-2 mr-3">
                        <div className="bg-purple-500 h-2 rounded-full" style={{width: '78%'}}></div>
                      </div>
                      <span className="text-purple-400 font-medium">777.78 points</span>
                    </div>
                  </div>
                </div>
              </PostCard>
            </div>

            <div className="mb-8">
              <h4 className="text-lg font-medium text-neutral-100 mb-3">Decision Rationale</h4>
              <p className="text-neutral-300 mb-4">
                The 2D platformer scored highest due to its optimal balance of learning opportunities, technical 
                feasibility, and scalability potential. Key factors included:
              </p>
              <ul className="text-neutral-300 space-y-2">
                <li>• <strong>Goal Clarity (22.22% weight):</strong> Clear, achievable objectives with measurable outcomes</li>
                <li>• <strong>Timeline Management (19.44% weight):</strong> Realistic scope for 10-week development cycle</li>
                <li>• <strong>Learning Value (13.89% weight):</strong> Comprehensive Unity and C# skill development</li>
                <li>• <strong>Scalability (11.11% weight):</strong> Extensible architecture for future enhancements</li>
              </ul>
            </div>
          </div>
        </PostSection>

        {/* Technical Implementation */}
        <PostSection title="Technical Implementation">
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-neutral-100 mb-4">Animation System Architecture</h3>
            <p className="text-neutral-300 mb-6">
              The game features a sophisticated animation system using Unity&apos;s Animator component with state machines, 
              conditional transitions, and blend trees for smooth character movement.
            </p>

            <PostCard className="mb-6">
              <h4 className="text-lg font-medium text-neutral-100 mb-4">Unity Animator State Machine</h4>
              <img src="/images/posts/431/animator-state-machine.png" alt="Animator State Machine" className="mb-4 rounded border border-neutral-700" />
              <p className="text-neutral-400 text-sm mt-2">
                Complete animation flow showing idle, movement, jumping, attacking, and death states with conditional transitions.
              </p>
            </PostCard>

            <Grid cols={2}>
              <PostCard>
                <h4 className="font-medium text-lg mb-3">Character Animations</h4>
                <div className="space-y-3">
                  <div>
                    <h5 className="font-medium text-neutral-200">Movement System</h5>
                    <p className="text-neutral-400 text-sm">Smooth running animation with leg and arm movement, sword swinging effects</p>
                  </div>
                  <div>
                    <h5 className="font-medium text-neutral-200">Combat System</h5>
                    <p className="text-neutral-400 text-sm">Dual attack animations with random selection, F-key and mouse input support</p>
                  </div>
                  <div>
                    <h5 className="font-medium text-neutral-200">Jump Mechanics</h5>
                    <p className="text-neutral-400 text-sm">Realistic leg positioning during jumps, multiple input key support</p>
                  </div>
                </div>
              </PostCard>

              <PostCard>
                <h4 className="font-medium text-lg mb-3">Enemy AI System</h4>
                <div className="space-y-3">
                  <div>
                    <h5 className="font-medium text-neutral-200">Behavior Patterns</h5>
                    <p className="text-neutral-400 text-sm">Idle patrol movement with player detection and engagement systems</p>
                  </div>
                  <div>
                    <h5 className="font-medium text-neutral-200">Health Management</h5>
                    <p className="text-neutral-400 text-sm">Dynamic health bars, damage feedback, and death animations</p>
                  </div>
                  <div>
                    <h5 className="font-medium text-neutral-200">Combat Response</h5>
                    <p className="text-neutral-400 text-sm">Directional awareness, player tracking, and attack coordination</p>
                  </div>
                </div>
              </PostCard>
            </Grid>

            <div className="mb-8">
              <h4 className="text-lg font-medium text-neutral-100 mb-3">Animation Implementation</h4>
              <p className="text-neutral-300 mb-4">
                Animation states are controlled through conditional parameters and state machine logic, 
                ensuring smooth transitions and responsive character behavior.
              </p>

              <CodeBlock languageLabel="C# - Jump Animation Controller" language='csharp'>
{`if ((Input.GetButtonDown("Jump") && IsGrounded()) || 
    (Input.GetButtonDown("Vertical") && IsGrounded())) {
    
    anim.SetTrigger("jump");
    Jump();
}`}
              </CodeBlock>

              <img src="/images/posts/431/idle-animation.gif" alt="Idle Animation GIF" className="my-4 rounded border border-neutral-700" />

              {/* <PostCard className="mb-6">
                <h4 className="text-lg font-medium text-neutral-100 mb-4">Animation Comparison</h4>
                <Grid cols={2}>
                  <div>
                    <h5 className="font-medium text-neutral-200 mb-2">Without Animations</h5>
                    <div className="bg-neutral-800 h-32 rounded flex items-center justify-center mb-2">
                      <span className="text-neutral-400">[Static Character Video]</span>
                    </div>
                    <p className="text-neutral-400 text-sm">Static, unengaging gameplay lacking visual appeal</p>
                  </div>
                  <div>
                    <h5 className="font-medium text-neutral-200 mb-2">With Animations</h5>
                    <div className="bg-neutral-800 h-32 rounded flex items-center justify-center mb-2">
                      <span className="text-neutral-400">[Animated Character Video]</span>
                    </div>
                    <p className="text-neutral-400 text-sm">Dynamic, engaging character with fluid movement and visual effects</p>
                  </div>
                </Grid>
              </PostCard> */}
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-neutral-100 mb-4">Procedural Level Generation</h3>
            <p className="text-neutral-300 mb-6">
              One of the most technically challenging features implemented was the procedural level generation system, 
              creating infinite, varied gameplay experiences.
            </p>

            <PostCard className="mb-6">
              <h4 className="text-lg font-medium text-neutral-100 mb-4">Level Generator Architecture</h4>
              <CodeBlock languageLabel="C# - Procedural Generation Core" language='csharp'>
{`void Update() {
    // Check if player is close to the end of generated platforms
    if (Vector3.Distance(player.position, lastEndPosition) < PLAYER_DISTANCE_SPAWN_LEVEL_PART) {
        SpawnLevelPart();
    }
}

void SpawnLevelPart() {
    Transform selectedPlatform = levelPartList[Random.Range(0, levelPartList.Length)];
    SpawnLevelPart(selectedPlatform, lastEndPosition);
    lastEndPosition = GetEndPosition(selectedPlatform);
}

void SpawnLevelPart(Transform levelPart, Vector3 spawnPosition) {
    GameObject newPlatform = Instantiate(levelPart, spawnPosition + offset, Quaternion.identity);
    newPlatform.transform.SetParent(levelGrid.transform);
}`}
              </CodeBlock>
            </PostCard>

            <div className="space-y-4">
              <PostCard>
                <h4 className="font-medium text-lg mb-3">System Components</h4>
                <Grid cols={2}>
                  <div>
                    <h5 className="font-medium text-neutral-200 mb-2">Awake() Method</h5>
                    <p className="text-neutral-400 text-sm">
                      Initializes end position tracking and spawns initial platform segments based on startingSpawnLevelParts variable
                    </p>
                  </div>
                  <div>
                    <h5 className="font-medium text-neutral-200 mb-2">Update() Method</h5>
                    <p className="text-neutral-400 text-sm">
                      Continuously monitors player proximity to level boundaries and triggers new segment generation when needed
                    </p>
                  </div>
                </Grid>
              </PostCard>

              <PostCard>
                <h4 className="font-medium text-lg mb-3">Technical Challenges & Solutions</h4>
                <div className="space-y-3">
                  <div className="border-l-4 border-red-500 pl-4">
                    <h5 className="font-medium text-neutral-200">Platform Collision Issues</h5>
                    <p className="text-neutral-400 text-sm">
                      Platforms were overlapping and interfering with each other during generation. Solved through 
                      precise offset calculations and collision detection improvements.
                    </p>
                  </div>
                  <div className="border-l-4 border-yellow-500 pl-4">
                    <h5 className="font-medium text-neutral-200">Performance Optimization</h5>
                    <p className="text-neutral-400 text-sm">
                      Infinite generation could lead to memory issues. Implemented cleanup systems and optimized 
                      spawning distance calculations.
                    </p>
                  </div>
                </div>
              </PostCard>
            </div>
          </div>
        </PostSection>

        {/* Quality Assurance & Testing */}
        <PostSection title="Quality Assurance &amp; Testing">
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-neutral-100 mb-4">Comprehensive Testing Strategy</h3>
            <p className="text-neutral-300 mb-6">
              We implemented a systematic testing approach using true/false positive/negative methodology to ensure 
              robust game functionality across all features and edge cases.
            </p>

            <PostCard className="mb-6">
              <h4 className="text-lg font-medium text-neutral-100 mb-4">Testing Methodology Framework</h4>
              <Grid cols={2}>
                <div>
                  <h5 className="font-medium text-neutral-200 mb-2">Testing Categories</h5>
                  <ul className="text-neutral-400 text-sm space-y-1">
                    <li>• <strong>True Positive:</strong> Prediction correct, technically correct</li>
                    <li>• <strong>True Negative:</strong> Prediction incorrect, technically correct</li>
                    <li>• <strong>False Positive:</strong> Prediction correct, technically incorrect</li>
                    <li>• <strong>False Negative:</strong> Prediction incorrect, technically incorrect</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-neutral-200 mb-2">Custom Testing Tool</h5>
                  <CodeBlock languageLabel="Python - Testing Classification" language='python'>
{`while True:
    working = input("Funktioniert es? ")
    predictionright = input("Vorhersage richtig? ")
    
    if (working == "ja"):
        output = "True"
    else:
        output = "False"
    if (predictionright == "ja"):
        output += " Positive"
    else:
        output += " Negative"
    print(output)`}
                  </CodeBlock>
                </div>
              </Grid>
            </PostCard>

            <div className="mb-8">
              <h4 className="text-lg font-medium text-neutral-100 mb-3">Test Results Summary</h4>
              <div className="space-y-4">
                <PostCard tint="green">
                  <h5 className="font-medium text-green-300 mb-2">True Positive Tests (✓)</h5>
                  <div className="grid md:grid-cols-2 gap-3 text-sm">
                    <div>
                      <p className="text-green-200/80 mb-1"><strong>Core Functionality</strong></p>
                      <ul className="text-green-200/70 space-y-1">
                        <li>• Menu navigation (Quit/Play)</li>
                        <li>• Character control systems</li>
                        <li>• Combat damage mechanics</li>
                        <li>• Physics and collision detection</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-green-200/80 mb-1"><strong>Game Systems</strong></p>
                      <ul className="text-green-200/70 space-y-1">
                        <li>• Audio integration and management</li>
                        <li>• High score persistence</li>
                        <li>• Game over conditions</li>
                        <li>• Cross-session data retention</li>
                      </ul>
                    </div>
                  </div>
                </PostCard>

                <PostCard tint="yellow">
                  <h5 className="font-medium text-yellow-300 mb-2">Issues Identified (⚠)</h5>
                  <div className="space-y-2 text-sm">
                    <div className="border-l-4 border-yellow-500 pl-3">
                      <p className="text-yellow-200/80"><strong>Animation Conflicts:</strong></p>
                      <p className="text-yellow-200/70">When multiple animations trigger simultaneously, they queue rather than blend properly</p>
                    </div>
                    <div className="border-l-4 border-yellow-500 pl-3">
                      <p className="text-yellow-200/80"><strong>UI Scaling Issues:</strong></p>
                      <p className="text-yellow-200/70">Coin counter display truncates when scores exceed 99 points</p>
                    </div>
                    <div className="border-l-4 border-yellow-500 pl-3">
                      <p className="text-yellow-200/80"><strong>Platform Compatibility:</strong></p>
                      <p className="text-yellow-200/70">APK build has limited keyboard input support in emulators</p>
                    </div>
                  </div>
                </PostCard>

                <PostCard tint="red">
                  <h5 className="font-medium text-red-300 mb-2">Critical Issues (❌)</h5>
                  <div className="border-l-4 border-red-500 pl-3">
                    <p className="text-red-200/80"><strong>Animation State Management:</strong></p>
                    <p className="text-red-200/70">
                      Animation timing inconsistencies when multiple actions are triggered in rapid succession, 
                      requiring state machine refinement
                    </p>
                  </div>
                </PostCard>
              </div>
            </div>
          </div>
        </PostSection>

        {/* Project Management & Collaboration */}
        <PostSection title="Project Management &amp; Collaboration">
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-neutral-100 mb-4">Development Workflow</h3>
            <p className="text-neutral-300 mb-6">
              Our collaborative development process emphasized continuous communication, shared decision-making, 
              and agile adaptation to challenges while maintaining high code quality standards.
            </p>

            <PostCard className="mb-6">
              <h4 className="text-lg font-medium text-neutral-100 mb-3">Daily Development Process</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-xs font-bold">1</div>
                  <div>
                    <h5 className="font-medium text-neutral-200">Morning Planning Sessions</h5>
                    <p className="text-neutral-400">Discuss daily objectives, review Trello board, assign specific features and implementations</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-xs font-bold">2</div>
                  <div>
                    <h5 className="font-medium text-neutral-200">Synchronized Development</h5>
                    <p className="text-neutral-400">Continuous voice communication, muted during focused work, immediate collaboration on errors</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-xs font-bold">3</div>
                  <div>
                    <h5 className="font-medium text-neutral-200">Progress Tracking</h5>
                    <p className="text-neutral-400">Regular Trello updates, milestone validation, and adaptive timeline management</p>
                  </div>
                </div>
              </div>
            </PostCard>

            <Grid cols={2}>
              <PostCard tint="blue">
                <h4 className="font-medium text-blue-300 mb-3">Technical Achievements</h4>
                <ul className="text-blue-200/80 text-sm space-y-1">
                  <li>• Mastered Unity development environment</li>
                  <li>• Implemented complex C# scripting solutions</li>
                  <li>• Created sophisticated animation systems</li>
                  <li>• Developed procedural generation algorithms</li>
                  <li>• Achieved cross-platform deployment</li>
                </ul>
              </PostCard>
              <PostCard tint="green">
                <h4 className="font-medium text-green-300 mb-3">Project Management Success</h4>
                <ul className="text-green-200/80 text-sm space-y-1">
                  <li>• Delivered on schedule within 10-week timeline</li>
                  <li>• Maintained zero-budget development cost</li>
                  <li>• Exceeded initial scope with advanced features</li>
                  <li>• Implemented comprehensive testing protocols</li>
                  <li>• Published game to Google Play Store</li>
                </ul>
              </PostCard>
            </Grid>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-neutral-100 mb-4">Challenge Resolution</h3>
            <p className="text-neutral-300 mb-6">
              Throughout development, we encountered various technical and logistical challenges that strengthened 
              our problem-solving abilities and collaborative skills.
            </p>

            <div className="space-y-4">
              <PostCard>
                <h4 className="font-medium text-lg mb-3">Technical Obstacles Overcome</h4>
                <div className="space-y-3">
                  <div className="border-l-4 border-red-500 pl-4">
                    <h5 className="font-medium text-neutral-200">Unity Environment Corruption</h5>
                    <p className="text-neutral-400 text-sm">
                      Late-stage Unity installation failure required rapid task redistribution and workflow adaptation. 
                      Resolved through role reassignment and documentation focus for affected team member.
                    </p>
                  </div>
                  <div className="border-l-4 border-orange-500 pl-4">
                    <h5 className="font-medium text-neutral-200">Complex Bug Resolution</h5>
                    <p className="text-neutral-400 text-sm">
                      Numerous programming errors emerged during implementation. Strengthened debugging skills 
                      and collaborative problem-solving through systematic error analysis.
                    </p>
                  </div>
                  <div className="border-l-4 border-yellow-500 pl-4">
                    <h5 className="font-medium text-neutral-200">Scope Management</h5>
                    <p className="text-neutral-400 text-sm">
                      Timeline pressure in final week required feature prioritization and rapid development cycles 
                      to achieve playable game state for demonstration.
                    </p>
                  </div>
                </div>
              </PostCard>

              <PostCard>
                <h4 className="font-medium text-lg mb-3">Learning Buffer Implementation</h4>
                <p className="text-neutral-400 text-sm mb-3">
                  Based on timeline challenges, we identified the importance of building project buffers for future work:
                </p>
                <ul className="text-neutral-400 text-sm space-y-1">
                  <li>• Minimum one-day buffer for unexpected complications</li>
                  <li>• Earlier milestone validation to catch issues sooner</li>
                  <li>• Alternative workflow strategies for technical failures</li>
                  <li>• Enhanced documentation practices for knowledge preservation</li>
                </ul>
              </PostCard>
            </div>
          </div>
        </PostSection>

        {/* Results & Impact */}
        <PostSection title="Project Outcomes &amp; Impact">
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-neutral-100 mb-4">Final Deliverables</h3>
            <p className="text-neutral-300 mb-6">
              The project culminated in a fully functional, published game that exceeded initial expectations 
              and demonstrated comprehensive mastery of game development principles.
            </p>

            <Grid cols={3}>
              <PostCard tint="green" className="text-center">
                <div className="text-2xl font-bold text-green-300 mb-2">Published</div>
                <p className="text-green-200/80 text-sm">Game released on Google Play Store as &quot;Knightaro&quot;</p>
              </PostCard>
              <PostCard tint="blue" className="text-center">
                <div className="text-2xl font-bold text-blue-300 mb-2">Zero Cost</div>
                <p className="text-blue-200/80 text-sm">Completed within existing resources and developer accounts</p>
              </PostCard>
              <PostCard tint="purple" className="text-center">
                <div className="text-2xl font-bold text-purple-300 mb-2">Full Features</div>
                <p className="text-purple-200/80 text-sm">Exceeded baseline requirements with advanced systems</p>
              </PostCard>
            </Grid>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-neutral-100 mb-4">Player Feedback & Reception</h3>
            <p className="text-neutral-300 mb-6">
              Community feedback validated our technical achievements and design decisions, highlighting 
              the project&apos;s success in creating engaging gameplay experiences.
            </p>

            <div className="space-y-4">
              <PostCard>
                <h4 className="font-medium text-lg mb-3">Community Reviews</h4>
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <p className="text-neutral-300 text-sm italic mb-2">
                      &quot;I find your game very interesting. The level generator impressed me the most. 
                      The character and animations are extremely admirable. The game has great potential :D&quot;
                    </p>
                    <p className="text-neutral-400 text-xs">— Manuel Andres, 16 years</p>
                  </div>

                  <div className="border-l-4 border-green-500 pl-4">
                    <p className="text-neutral-300 text-sm italic mb-2">
                      &quot;Very interesting to see what&apos;s possible in just 8 weeks. I work in IT myself and have never 
                      ventured into game development. The game convinced me and sparked my interest.&quot;
                    </p>
                    <p className="text-neutral-400 text-xs">— Danijel Pavlovic, 18 years</p>
                  </div>

                  <div className="border-l-4 border-purple-500 pl-4">
                    <p className="text-neutral-300 text-sm italic mb-2">
                      &quot;Cool animations, I believe you worked well as a team and delivered a very good product. 
                      I like the style of your game and the concept itself very much.&quot;
                    </p>
                    <p className="text-neutral-400 text-xs">— Sascha Buthelezi, 16 years</p>
                  </div>
                </div>
              </PostCard>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-neutral-100 mb-4">Technical Skills Developed</h3>
            <Grid cols={2}>
              <PostCard tint="blue">
                <h4 className="font-medium text-blue-300 mb-3">Game Development Mastery</h4>
                <ul className="text-blue-200/80 text-sm space-y-1">
                  <li>• Unity engine proficiency and workflow optimization</li>
                  <li>• C# programming with object-oriented design patterns</li>
                  <li>• Physics-based character controller implementation</li>
                  <li>• Complex animation state machine architecture</li>
                  <li>• Procedural content generation algorithms</li>
                  <li>• Cross-platform deployment and optimization</li>
                </ul>
              </PostCard>
              <PostCard tint="green">
                <h4 className="font-medium text-green-300 mb-3">Professional Development</h4>
                <ul className="text-green-200/80 text-sm space-y-1">
                  <li>• Systematic project planning and execution</li>
                  <li>• Collaborative development workflows</li>
                  <li>• Comprehensive testing and quality assurance</li>
                  <li>• Technical documentation and knowledge transfer</li>
                  <li>• Problem-solving and adaptive planning skills</li>
                  <li>• Stakeholder communication and feedback integration</li>
                </ul>
              </PostCard>
            </Grid>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-neutral-100 mb-4">Learning Methodology Impact</h3>
            <p className="text-neutral-300 mb-4">
              This project demonstrated the effectiveness of self-directed learning combined with systematic 
              project management in mastering complex technical domains.
            </p>

            <PostCard>
              <h4 className="font-medium text-lg mb-3">Key Success Factors</h4>
              <Grid cols={2}>
                <div>
                  <h5 className="font-medium text-neutral-200 mb-2">Learning Strategy</h5>
                  <ul className="text-neutral-400 text-sm space-y-1">
                    <li>• Leveraged existing Java knowledge for C# transition</li>
                    <li>• Extensive tutorial research and implementation</li>
                    <li>• Hands-on experimentation with Unity features</li>
                    <li>• Iterative skill building through feature development</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-neutral-200 mb-2">Project Execution</h5>
                  <ul className="text-neutral-400 text-sm space-y-1">
                    <li>• Clear goal definition and systematic evaluation</li>
                    <li>• Agile adaptation to technical challenges</li>
                    <li>• Comprehensive documentation throughout development</li>
                    <li>• Community engagement and feedback integration</li>
                  </ul>
                </div>
              </Grid>
            </PostCard>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-neutral-100 mb-4">Professional Portfolio Value</h3>
            <p className="text-neutral-300 mb-4">
              This Module 431 project serves as a comprehensive demonstration of technical learning agility, 
              collaborative development skills, and the ability to deliver complete software products from 
              concept to publication.
            </p>

            <PostCard>
              <h4 className="font-medium text-lg mb-3">Demonstrated Competencies</h4>
              <ul className="text-neutral-300 space-y-2">
                <li>• <strong>Rapid Technology Adoption:</strong> Mastered Unity and C# within project timeline despite zero prior experience</li>
                <li>• <strong>Systems Thinking:</strong> Designed and implemented complex, interconnected game systems with proper architecture</li>
                <li>• <strong>Quality Focus:</strong> Delivered polished product with comprehensive testing and user feedback integration</li>
                <li>• <strong>Project Leadership:</strong> Successfully managed timeline, scope, and technical challenges in collaborative environment</li>
                <li>• <strong>Documentation Excellence:</strong> Created thorough project documentation following professional methodologies</li>
                <li>• <strong>Innovation Capability:</strong> Implemented advanced features like procedural generation beyond basic requirements</li>
              </ul>
            </PostCard>
          </div>
        </PostSection>

      </PostLayout>

      {/* Footer */}
      <footer className="text-center mt-12 text-neutral-400">
        <p className="text-sm">
          Unity Game Development • Module 431 • 10-Week Project • Published on Google Play Store •
          <a 
            href="#" 
            className="text-blue-400 hover:text-blue-300 ml-1"
            target="_blank" 
            rel="noopener noreferrer">
            Play Knightaro
          </a>
        </p>
      </footer>
    </>
  )
}