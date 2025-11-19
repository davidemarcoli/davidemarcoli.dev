import { Metadata } from 'next'
import PostLayout from '@/components/post/layout'
import PostSection from '@/components/post/section'
import Grid from '@/components/post/grid'
import PostCard from '@/components/post/card'

export const metadata: Metadata = {
    title: 'Shiny Pixels Office Relocation - Comprehensive Project Management',
    description:
        'A complete IT infrastructure relocation project showcasing comprehensive project management methodologies, risk analysis, resource planning, and technical implementation for a Swiss web agency.',
}

export default function ShinyPixelsRelocationPage() {
    return (
        <>
            <PostLayout
                title="Shiny Pixels Office Relocation"
                description="A comprehensive project management case study demonstrating end-to-end planning, risk management, and technical implementation for a complete IT infrastructure relocation of a Swiss web agency. Completed as part of Module M306."
                tags={[
                    { label: 'Project Management', variant: 'blue' },
                    { label: 'IT Infrastructure', variant: 'green' },
                    { label: 'Risk Management', variant: 'purple' },
                ]}
            >
                {/* Project Overview */}
                <PostSection title="Project Overview">
                    <div className="mb-8">
                        <h3 className="text-2xl font-semibold text-neutral-100 mb-4">Project Context</h3>
                        <p className="text-neutral-300 mb-4">
                            This project was completed as part of Module M306 and involved the complete relocation of Shiny Pixels GmbH,
                            a Swiss web agency specializing in web design, development, and hosting services. The company required a
                            seamless transition to a new office space while maintaining business continuity and upgrading their entire
                            IT infrastructure.
                        </p>
                        <p className="text-neutral-300 mb-6">
                            As the DJOLM GmbH consulting team, we managed every aspect of the relocation from initial planning through
                            final implementation and staff training, ensuring zero downtime during the transition.
                        </p>

                        <Grid cols={3}>
                            <PostCard tint="blue">
                                <h4 className="font-medium text-blue-300 mb-2">Project Duration</h4>
                                <p className="text-blue-200/80 text-sm">5 weeks (Feb 30 - March 6, 2023)</p>
                            </PostCard>
                            <PostCard tint="green">
                                <h4 className="font-medium text-green-300 mb-2">Budget</h4>
                                <p className="text-green-200/80 text-sm">CHF 200,000 (+CHF 40,000 buffer)</p>
                            </PostCard>
                            <PostCard tint="purple">
                                <h4 className="font-medium text-purple-300 mb-2">Team Size</h4>
                                <p className="text-purple-200/80 text-sm">5 consultants + stakeholders</p>
                            </PostCard>
                        </Grid>
                    </div>

                    <div className="mb-8">
                        <h3 className="text-2xl font-semibold text-neutral-100 mb-4">Business Requirements</h3>
                        <p className="text-neutral-300 mb-4">
                            Shiny Pixels GmbH had outgrown their existing office space and needed to relocate to accommodate planned
                            growth while maintaining their commitment to data security and local hosting. The new office required:
                        </p>

                        <ul className="text-neutral-300 space-y-2 mb-6">
                            <li>• Complete IT infrastructure for 13+ employees across three business units</li>
                            <li>• Advanced videoconferencing capabilities for European freelancer coordination</li>
                            <li>• Robust server infrastructure maintaining local data storage requirements</li>
                            <li>• Professional meeting and event spaces for quarterly team gatherings</li>
                            <li>• Seamless migration with zero business interruption</li>
                        </ul>

                        <PostCard className="mb-6">
                            <h4 className="text-lg font-medium text-neutral-100 mb-4">Office Concept Visualization</h4>
                            <div className="bg-neutral-800 h-64 rounded flex items-center justify-center">
                                <span className="text-neutral-400">[3D Office Layout Render]</span>
                            </div>
                            <p className="text-neutral-400 text-sm mt-2">
                                Complete office concept showing co-working spaces, meeting areas, server room, and event space layout.
                            </p>
                        </PostCard>
                    </div>
                </PostSection>

                {/* Project Management Methodology */}
                <PostSection title="Project Management Methodology">
                    <div className="mb-8">
                        <h3 className="text-2xl font-semibold text-neutral-100 mb-4">Project Structure</h3>
                        <p className="text-neutral-300 mb-6">
                            We employed a comprehensive project management approach using work breakdown structure (WBS),
                            network planning, and resource optimization to ensure successful delivery within the tight timeline.
                        </p>

                        <PostCard className="mb-6">
                            <h4 className="text-lg font-medium text-neutral-100 mb-4">Work Breakdown Structure</h4>
                            <div className="bg-neutral-800 h-64 rounded flex items-center justify-center">
                                <span className="text-neutral-400">[Project Structure Plan Diagram]</span>
                            </div>
                        </PostCard>

                        <Grid cols={3}>
                            <PostCard tint="blue">
                                <h4 className="font-medium text-blue-300 mb-3">A - Material Procurement</h4>
                                <ul className="text-blue-200/80 text-sm space-y-1">
                                    <li>• Laptops & Desktops</li>
                                    <li>• Monitors & Peripherals</li>
                                    <li>• Networking Equipment</li>
                                    <li>• Audio/Visual Systems</li>
                                    <li>• Server Hardware</li>
                                </ul>
                            </PostCard>
                            <PostCard tint="green">
                                <h4 className="font-medium text-green-300 mb-3">B - Infrastructure Setup</h4>
                                <ul className="text-green-200/80 text-sm space-y-1">
                                    <li>• Workspace Configuration</li>
                                    <li>• Network Installation</li>
                                    <li>• Server Migration</li>
                                    <li>• Software Deployment</li>
                                    <li>• System Integration</li>
                                </ul>
                            </PostCard>
                            <PostCard tint="purple">
                                <h4 className="font-medium text-purple-300 mb-3">C - Training & Handover</h4>
                                <ul className="text-purple-200/80 text-sm space-y-1">
                                    <li>• Meeting Space Training</li>
                                    <li>• Server Operations</li>
                                    <li>• Workspace Setup</li>
                                    <li>• Equipment Usage</li>
                                    <li>• Event Space Management</li>
                                </ul>
                            </PostCard>
                        </Grid>
                    </div>

                    <div className="mb-8">
                        <h3 className="text-2xl font-semibold text-neutral-100 mb-4">Critical Path Analysis</h3>
                        <p className="text-neutral-300 mb-4">
                            Using network planning techniques, we identified the critical path and optimized resource allocation
                            to minimize project duration while managing dependencies.
                        </p>

                        <PostCard className="mb-6">
                            <h4 className="text-lg font-medium text-neutral-100 mb-4">Network Plan</h4>
                            <div className="bg-neutral-800 h-64 rounded flex items-center justify-center">
                                <span className="text-neutral-400">[Critical Path Network Diagram]</span>
                            </div>
                        </PostCard>

                        <Grid cols={2}>
                            <PostCard tint="orange">
                                <h4 className="font-medium text-orange-300 mb-2">Critical Path Duration</h4>
                                <p className="text-orange-200/80 text-sm">34 days with optimized scheduling</p>
                            </PostCard>
                            <PostCard tint="pink">
                                <h4 className="font-medium text-pink-300 mb-2">Resource Optimization</h4>
                                <p className="text-pink-200/80 text-sm">Parallel execution reduced timeline by 40%</p>
                            </PostCard>
                        </Grid>
                    </div>

                    <div className="mb-8">
                        <h3 className="text-2xl font-semibold text-neutral-100 mb-4">Timeline & Milestones</h3>
                        <PostCard className="mb-6">
                            <h4 className="text-lg font-medium text-neutral-100 mb-4">Gantt Chart</h4>
                            <div className="bg-neutral-800 h-64 rounded flex items-center justify-center">
                                <span className="text-neutral-400">[Detailed Gantt Chart with Resource Allocation]</span>
                            </div>
                        </PostCard>

                        <div className="space-y-4">
                            <PostCard>
                                <h4 className="font-medium text-lg mb-2">Key Milestones</h4>
                                <div className="grid md:grid-cols-2 gap-4 text-sm">
                                    <div>
                                        <p className="text-neutral-300"><strong>Feb 1:</strong> Project Kick-off</p>
                                        <p className="text-neutral-300"><strong>Feb 2:</strong> Material Procurement</p>
                                        <p className="text-neutral-300"><strong>Feb 3:</strong> Server Migration</p>
                                        <p className="text-neutral-300"><strong>Feb 10:</strong> Equipment Delivery</p>
                                    </div>
                                    <div>
                                        <p className="text-neutral-300"><strong>Feb 15:</strong> Hardware Assembly</p>
                                        <p className="text-neutral-300"><strong>Feb 20:</strong> Infrastructure Setup</p>
                                        <p className="text-neutral-300"><strong>Feb 27:</strong> Training Preparation</p>
                                        <p className="text-neutral-300"><strong>Mar 1:</strong> Project Delivery</p>
                                    </div>
                                </div>
                            </PostCard>
                        </div>
                    </div>
                </PostSection>

                {/* Resource Planning & Procurement */}
                <PostSection title="Resource Planning & Procurement">
                    <div className="mb-8">
                        <h3 className="text-2xl font-semibold text-neutral-100 mb-4">Budget Allocation</h3>
                        <p className="text-neutral-300 mb-6">
                            Comprehensive resource planning ensured optimal allocation of the CHF 240,000 total budget across
                            hardware, software, and implementation services.
                        </p>

                        <PostCard className="mb-6">
                            <h4 className="text-lg font-medium text-neutral-100 mb-4">Cost Breakdown Analysis</h4>
                            <div className="bg-neutral-800 h-48 rounded flex items-center justify-center">
                                <span className="text-neutral-400">[Resource Cost Distribution Chart]</span>
                            </div>
                        </PostCard>

                        <Grid cols={2}>
                            <PostCard tint="blue">
                                <h4 className="font-medium text-blue-300 mb-3">Personnel Costs</h4>
                                <ul className="text-blue-200/80 text-sm space-y-1">
                                    <li>• Project Manager: CHF 450/hour</li>
                                    <li>• Technical Specialists: CHF 250-450/hour</li>
                                    <li>• Implementation Team: CHF 120-130/hour</li>
                                </ul>
                            </PostCard>
                            <PostCard tint="green">
                                <h4 className="font-medium text-green-300 mb-3">Major Expenses</h4>
                                <ul className="text-green-200/80 text-sm space-y-1">
                                    <li>• MacBooks & iMacs: CHF 71,481</li>
                                    <li>• Server Infrastructure: CHF 57,280</li>
                                    <li>• Video Conference System: CHF 11,690</li>
                                </ul>
                            </PostCard>
                        </Grid>
                    </div>

                    <div className="mb-8">
                        <h3 className="text-2xl font-semibold text-neutral-100 mb-4">Technical Specifications</h3>
                        <p className="text-neutral-300 mb-6">
                            Each component was carefully selected based on specific criteria ensuring compatibility,
                            performance, and long-term value for the agency&apos;s requirements.
                        </p>

                        <div className="space-y-6">
                            <PostCard>
                                <h4 className="font-medium text-lg mb-3">Workstation Configuration</h4>
                                <Grid cols={2}>
                                    <div>
                                        <h5 className="font-medium text-neutral-200 mb-2">Hardware Selection</h5>
                                        <ul className="text-neutral-400 text-sm space-y-1">
                                            <li>• 13x iMac 24&quot; (8-Core, 8GB RAM, 256GB SSD)</li>
                                            <li>• 6x MacBook Pro 16&quot; (96GB RAM, 8TB SSD)</li>
                                            <li>• 13x HP U32 4K Monitors (31.5&quot;, 3840x2160)</li>
                                            <li>• 12x MX Master 3S Wireless Mice</li>
                                            <li>• 12x Lenovo Professional Keyboards</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h5 className="font-medium text-neutral-200 mb-2">Selection Criteria</h5>
                                        <ul className="text-neutral-400 text-sm space-y-1">
                                            <li>• <strong>Ergonomics:</strong> Adjustable stands, comfortable peripherals</li>
                                            <li>• <strong>Performance:</strong> 4K resolution, fast processing</li>
                                            <li>• <strong>Compatibility:</strong> Unified Apple ecosystem</li>
                                            <li>• <strong>Productivity:</strong> Dual-screen workflows</li>
                                        </ul>
                                    </div>
                                </Grid>
                            </PostCard>

                            <PostCard>
                                <h4 className="font-medium text-lg mb-3">Video Conferencing Infrastructure</h4>
                                <div className="mb-4">
                                    <h5 className="font-medium text-neutral-200 mb-2">Solution Evaluation</h5>
                                    <div className="bg-neutral-800 rounded p-4">
                                        <div className="overflow-x-auto">
                                            <table className="w-full text-sm">
                                                <thead>
                                                    <tr className="border-b border-neutral-700">
                                                        <th className="text-left py-2 text-neutral-300">Criteria</th>
                                                        <th className="text-center py-2 text-neutral-300">Weight</th>
                                                        <th className="text-center py-2 text-blue-300">AVer VB342</th>
                                                        <th className="text-center py-2 text-green-300">Poly Studio</th>
                                                        <th className="text-center py-2 text-orange-300">Bose VB1</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="text-neutral-400">
                                                    <tr>
                                                        <td className="py-1">Price</td>
                                                        <td className="text-center">2.0</td>
                                                        <td className="text-center">3</td>
                                                        <td className="text-center text-green-300 font-medium">4</td>
                                                        <td className="text-center">2</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="py-1">Camera Quality</td>
                                                        <td className="text-center">1.0</td>
                                                        <td className="text-center">5</td>
                                                        <td className="text-center text-green-300 font-medium">5</td>
                                                        <td className="text-center">4</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="py-1">Audio Quality</td>
                                                        <td className="text-center">1.0</td>
                                                        <td className="text-center">3</td>
                                                        <td className="text-center text-green-300 font-medium">4</td>
                                                        <td className="text-center">4</td>
                                                    </tr>
                                                    <tr className="border-t border-neutral-700">
                                                        <td className="py-2 font-medium">Total Score</td>
                                                        <td className="text-center"></td>
                                                        <td className="text-center">19</td>
                                                        <td className="text-center text-green-300 font-bold">22.5</td>
                                                        <td className="text-center">18.5</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <p className="text-neutral-400 text-sm mt-2">
                                        <strong>Selected:</strong> Poly Studio USB (CHF 691) - Best overall value with superior audio/video quality
                                    </p>
                                </div>
                            </PostCard>

                            <PostCard>
                                <h4 className="font-medium text-lg mb-3">Server Infrastructure</h4>
                                <Grid cols={2}>
                                    <div>
                                        <h5 className="font-medium text-neutral-200 mb-2">Hardware Configuration</h5>
                                        <ul className="text-neutral-400 text-sm space-y-1">
                                            <li>• 44x HPE ProLiant MicroServer Gen10+</li>
                                            <li>• Intel Xeon E-2224 processors</li>
                                            <li>• 16GB RAM per server</li>
                                            <li>• 2TB Seagate Barracuda storage</li>
                                            <li>• 4x Value 42HE server racks</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h5 className="font-medium text-neutral-200 mb-2">Investment Breakdown</h5>
                                        <ul className="text-neutral-400 text-sm space-y-1">
                                            <li>• Servers: CHF 51,876 (44 units)</li>
                                            <li>• Storage: CHF 2,196 (44 drives)</li>
                                            <li>• Racks: CHF 3,208 (4 units)</li>
                                            <li>• <strong>Total: CHF 57,280</strong></li>
                                        </ul>
                                    </div>
                                </Grid>
                            </PostCard>
                        </div>
                    </div>

                    <div className="mb-8">
                        <h3 className="text-2xl font-semibold text-neutral-100 mb-4">Procurement Strategy</h3>
                        <p className="text-neutral-300 mb-6">
                            Strategic procurement planning ensured all equipment arrived by February 7th, enabling
                            the accelerated installation timeline.
                        </p>

                        <PostCard>
                            <h4 className="text-lg font-medium text-neutral-100 mb-4">Final Cost Summary</h4>
                            <div className="bg-neutral-800 rounded p-4">
                                <div className="grid md:grid-cols-2 gap-6 text-sm">
                                    <div>
                                        <h5 className="font-medium text-neutral-200 mb-2">Equipment Costs</h5>
                                        <ul className="text-neutral-400 space-y-1">
                                            <li>Total Equipment: CHF 158,677</li>
                                            <li>Volume Discounts: CHF 15,868</li>
                                            <li>Net Equipment Cost: CHF 142,809</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h5 className="font-medium text-neutral-200 mb-2">Project Summary</h5>
                                        <ul className="text-neutral-400 space-y-1">
                                            <li>Budget Utilization: 71.4%</li>
                                            <li>Under Budget: CHF 57,191</li>
                                            <li>Contingency Unused: CHF 40,000</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </PostCard>
                    </div>
                </PostSection>

                {/* Risk Management */}
                <PostSection title="Risk Management">
                    <div className="mb-8">
                        <h3 className="text-2xl font-semibold text-neutral-100 mb-4">Risk Assessment Framework</h3>
                        <p className="text-neutral-300 mb-6">
                            Comprehensive risk analysis identified potential project threats and established mitigation
                            strategies to ensure successful delivery within timeline and budget constraints.
                        </p>

                        <PostCard className="mb-6">
                            <h4 className="text-lg font-medium text-neutral-100 mb-4">Risk Matrix</h4>
                            <div className="bg-neutral-800 h-64 rounded flex items-center justify-center">
                                <span className="text-neutral-400">[Risk Probability vs Impact Matrix]</span>
                            </div>
                        </PostCard>

                        <div className="space-y-4">
                            <PostCard>
                                <h4 className="font-medium text-lg mb-3">High-Priority Risks</h4>
                                <div className="space-y-3">
                                    <div className="border-l-4 border-red-500 pl-4">
                                        <h5 className="font-medium text-neutral-200">Equipment Damage During Installation</h5>
                                        <p className="text-neutral-400 text-sm mb-2">
                                            <strong>Probability:</strong> Medium | <strong>Impact:</strong> High
                                        </p>
                                        <p className="text-neutral-400 text-sm">
                                            <strong>Mitigation:</strong> Notify client immediately, attempt repairs for expensive items,
                                            implement careful handling protocols during assembly.
                                        </p>
                                    </div>

                                    <div className="border-l-4 border-orange-500 pl-4">
                                        <h5 className="font-medium text-neutral-200">Timeline Delays</h5>
                                        <p className="text-neutral-400 text-sm mb-2">
                                            <strong>Probability:</strong> Medium | <strong>Impact:</strong> Medium
                                        </p>
                                        <p className="text-neutral-400 text-sm">
                                            <strong>Mitigation:</strong> Explain delays to client when caused by external factors,
                                            reschedule delivery dates cooperatively, maintain flexible project planning.
                                        </p>
                                    </div>
                                </div>
                            </PostCard>

                            <PostCard>
                                <h4 className="font-medium text-lg mb-3">Medium-Priority Risks</h4>
                                <div className="space-y-3">
                                    <div className="border-l-4 border-yellow-500 pl-4">
                                        <h5 className="font-medium text-neutral-200">Late Equipment Delivery</h5>
                                        <p className="text-neutral-400 text-sm mb-2">
                                            <strong>Probability:</strong> Medium | <strong>Impact:</strong> Medium
                                        </p>
                                        <p className="text-neutral-400 text-sm">
                                            <strong>Mitigation:</strong> Source alternative products with faster delivery times,
                                            cancel original orders when possible, maintain supplier diversity.
                                        </p>
                                    </div>

                                    <div className="border-l-4 border-yellow-500 pl-4">
                                        <h5 className="font-medium text-neutral-200">Equipment Not Meeting Requirements</h5>
                                        <p className="text-neutral-400 text-sm mb-2">
                                            <strong>Probability:</strong> Low | <strong>Impact:</strong> Medium
                                        </p>
                                        <p className="text-neutral-400 text-sm">
                                            <strong>Mitigation:</strong> Gather client feedback on delivered products,
                                            exchange unacceptable items, improve requirement specification process.
                                        </p>
                                    </div>

                                    <div className="border-l-4 border-yellow-500 pl-4">
                                        <h5 className="font-medium text-neutral-200">Defective Equipment Delivery</h5>
                                        <p className="text-neutral-400 text-sm mb-2">
                                            <strong>Probability:</strong> Low | <strong>Impact:</strong> Medium
                                        </p>
                                        <p className="text-neutral-400 text-sm">
                                            <strong>Mitigation:</strong> Return defective items when possible, order from alternative
                                            suppliers, review vendor ratings before procurement.
                                        </p>
                                    </div>
                                </div>
                            </PostCard>
                        </div>
                    </div>
                </PostSection>

                {/* Implementation */}
                <PostSection title="Implementation & Installation">
                    <div className="mb-8">
                        <h3 className="text-2xl font-semibold text-neutral-100 mb-4">Installation Strategy</h3>
                        <p className="text-neutral-300 mb-6">
                            The installation plan optimized workflow across different office zones, allowing parallel
                            execution and minimizing interdependencies between team members.
                        </p>

                        <PostCard className="mb-6">
                            <h4 className="text-lg font-medium text-neutral-100 mb-4">Office Layout & Installation Zones</h4>
                            <div className="bg-neutral-800 h-64 rounded flex items-center justify-center">
                                <span className="text-neutral-400">[Detailed Office Floor Plan with Installation Zones]</span>
                            </div>
                        </PostCard>

                        <Grid cols={4}>
                            <PostCard tint="blue">
                                <h4 className="font-medium text-blue-300 mb-2">Co-Working Space</h4>
                                <p className="text-blue-200/80 text-sm">8 iMac workstations with dual monitors and full peripherals</p>
                            </PostCard>
                            <PostCard tint="green">
                                <h4 className="font-medium text-green-300 mb-2">Back Office</h4>
                                <p className="text-green-200/80 text-sm">2 management workstations with specialized equipment</p>
                            </PostCard>
                            <PostCard tint="purple">
                                <h4 className="font-medium text-purple-300 mb-2">Meeting Space</h4>
                                <p className="text-purple-200/80 text-sm">Professional videoconference system with 85&quot; display</p>
                            </PostCard>
                            <PostCard tint="orange">
                                <h4 className="font-medium text-orange-300 mb-2">Event Space</h4>
                                <p className="text-orange-200/80 text-sm">Presentation setup with projector and sound system</p>
                            </PostCard>
                        </Grid>
                    </div>

                    <div className="mb-8">
                        <h3 className="text-2xl font-semibold text-neutral-100 mb-4">Installation Timeline</h3>
                        <p className="text-neutral-300 mb-6">
                            Coordinated installation across four zones with specialized teams ensuring efficient
                            deployment and comprehensive testing.
                        </p>

                        <div className="space-y-4">
                            <PostCard>
                                <h4 className="font-medium text-lg mb-3">Phase 1: Infrastructure Foundation (Feb 8-15)</h4>
                                <Grid cols={2}>
                                    <div>
                                        <h5 className="font-medium text-neutral-200 mb-2">Network & Cabling</h5>
                                        <ul className="text-neutral-400 text-sm space-y-1">
                                            <li>• WLAN router installation and configuration</li>
                                            <li>• Cable routing for workstations and printers</li>
                                            <li>• Server room infrastructure setup</li>
                                            <li>• Meeting space AV cabling</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h5 className="font-medium text-neutral-200 mb-2">Server Deployment</h5>
                                        <ul className="text-neutral-400 text-sm space-y-1">
                                            <li>• 44 server assembly and rack mounting</li>
                                            <li>• Network configuration and testing</li>
                                            <li>• Data migration from legacy systems</li>
                                            <li>• Backup and redundancy setup</li>
                                        </ul>
                                    </div>
                                </Grid>
                            </PostCard>

                            <PostCard>
                                <h4 className="font-medium text-lg mb-3">Phase 2: Workstation Deployment (Feb 16-26)</h4>
                                <Grid cols={2}>
                                    <div>
                                        <h5 className="font-medium text-neutral-200 mb-2">Hardware Installation</h5>
                                        <ul className="text-neutral-400 text-sm space-y-1">
                                            <li>• iMac positioning and monitor mounting</li>
                                            <li>• Peripheral connection and testing</li>
                                            <li>• Docking station configuration</li>
                                            <li>• Printer deployment and networking</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h5 className="font-medium text-neutral-200 mb-2">Software Configuration</h5>
                                        <ul className="text-neutral-400 text-sm space-y-1">
                                            <li>• macOS setup and user account creation</li>
                                            <li>• Essential software installation</li>
                                            <li>• Network drive mapping</li>
                                            <li>• Security policy implementation</li>
                                        </ul>
                                    </div>
                                </Grid>
                            </PostCard>

                            <PostCard>
                                <h4 className="font-medium text-lg mb-3">Phase 3: Specialized Systems (Feb 10-13)</h4>
                                <Grid cols={2}>
                                    <div>
                                        <h5 className="font-medium text-neutral-200 mb-2">Meeting Technology</h5>
                                        <ul className="text-neutral-400 text-sm space-y-1">
                                            <li>• 85&quot; Neo QLED display mounting</li>
                                            <li>• Poly Studio videoconference system</li>
                                            <li>• Audio system integration</li>
                                            <li>• Wireless presentation setup</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h5 className="font-medium text-neutral-200 mb-2">Event Space</h5>
                                        <ul className="text-neutral-400 text-sm space-y-1">
                                            <li>• Samsung Freestyle projector installation</li>
                                            <li>• 200x200cm projection screen</li>
                                            <li>• Sonos sound system setup</li>
                                            <li>• Lighting and ambiance controls</li>
                                        </ul>
                                    </div>
                                </Grid>
                            </PostCard>
                        </div>
                    </div>
                </PostSection>

                {/* Training & Knowledge Transfer */}
                <PostSection title="Training & Knowledge Transfer">
                    <div className="mb-8">
                        <h3 className="text-2xl font-semibold text-neutral-100 mb-4">Comprehensive Training Program</h3>
                        <p className="text-neutral-300 mb-6">
                            Structured training sessions ensured all staff could effectively utilize the new office
                            infrastructure from day one, minimizing productivity loss during the transition.
                        </p>

                        <div className="space-y-4">
                            <PostCard>
                                <h4 className="font-medium text-lg mb-3">Training Schedule - March 1, 2023</h4>
                                <div className="space-y-3">
                                    <div className="border-l-4 border-blue-500 pl-4">
                                        <h5 className="font-medium text-neutral-200">Meeting Space Operations (30 min)</h5>
                                        <p className="text-neutral-400 text-sm">
                                            <strong>Audience:</strong> Entire Office | <strong>Instructor:</strong> Davide<br />
                                            Video conferencing system, display controls, wireless presentation, audio management
                                        </p>
                                    </div>

                                    <div className="border-l-4 border-green-500 pl-4">
                                        <h5 className="font-medium text-neutral-200">Workspace Setup (180 min)</h5>
                                        <p className="text-neutral-400 text-sm">
                                            <strong>Audience:</strong> Entire Office | <strong>Instructor:</strong> Lazar<br />
                                            iMac configuration, dual monitor setup, peripheral usage, docking stations, software basics
                                        </p>
                                    </div>

                                    <div className="border-l-4 border-purple-500 pl-4">
                                        <h5 className="font-medium text-neutral-200">Server Administration (120 min)</h5>
                                        <p className="text-neutral-400 text-sm">
                                            <strong>Audience:</strong> System Administrators | <strong>Instructor:</strong> Oliver<br />
                                            Server monitoring, maintenance procedures, backup protocols, security management
                                        </p>
                                    </div>

                                    <div className="border-l-4 border-orange-500 pl-4">
                                        <h5 className="font-medium text-neutral-200">Event Space Management (30 min)</h5>
                                        <p className="text-neutral-400 text-sm">
                                            <strong>Audience:</strong> Event Organizers, Managers | <strong>Instructor:</strong> Oliver<br />
                                            Projector operation, sound system controls, lighting management, equipment troubleshooting
                                        </p>
                                    </div>

                                    <div className="border-l-4 border-pink-500 pl-4">
                                        <h5 className="font-medium text-neutral-200">Printer Network Usage (15 min)</h5>
                                        <p className="text-neutral-400 text-sm">
                                            <strong>Audience:</strong> Entire Office | <strong>Instructor:</strong> Lazar<br />
                                            Network printer access, mobile printing, troubleshooting, maintenance requests
                                        </p>
                                    </div>
                                </div>
                            </PostCard>

                            <PostCard>
                                <h4 className="font-medium text-lg mb-3">Knowledge Transfer Materials</h4>
                                <Grid cols={2}>
                                    <div>
                                        <h5 className="font-medium text-neutral-200 mb-2">Documentation Provided</h5>
                                        <ul className="text-neutral-400 text-sm space-y-1">
                                            <li>• Complete system architecture diagrams</li>
                                            <li>• User manuals for all equipment</li>
                                            <li>• Troubleshooting guides and FAQs</li>
                                            <li>• Maintenance schedules and contacts</li>
                                            <li>• Emergency procedures and escalation</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h5 className="font-medium text-neutral-200 mb-2">Ongoing Support</h5>
                                        <ul className="text-neutral-400 text-sm space-y-1">
                                            <li>• 30-day post-installation support</li>
                                            <li>• Remote assistance capabilities</li>
                                            <li>• Vendor contact information</li>
                                            <li>• Warranty and service agreements</li>
                                            <li>• Future upgrade recommendations</li>
                                        </ul>
                                    </div>
                                </Grid>
                            </PostCard>
                        </div>
                    </div>
                </PostSection>

                {/* Project Governance */}
                <PostSection title="Project Governance & Communication">
                    <div className="mb-8">
                        <h3 className="text-2xl font-semibold text-neutral-100 mb-4">Stakeholder Management</h3>
                        <p className="text-neutral-300 mb-6">
                            Regular stakeholder communication ensured alignment with business objectives and
                            timely decision-making throughout the project lifecycle.
                        </p>

                        <PostCard className="mb-6">
                            <h4 className="font-medium text-lg mb-3">Meeting Protocol Summary</h4>
                            <div className="space-y-3 text-sm">
                                <div className="border-l-4 border-blue-500 pl-4">
                                    <h5 className="font-medium text-neutral-200">Dec 13, 2022 - Project Initiation</h5>
                                    <p className="text-neutral-400">
                                        <strong>Attendees:</strong> Full project team<br />
                                        <strong>Decisions:</strong> Task allocation, requirement clarification, project board setup
                                    </p>
                                </div>

                                <div className="border-l-4 border-green-500 pl-4">
                                    <h5 className="font-medium text-neutral-200">Dec 20, 2022 - Scope Clarification</h5>
                                    <p className="text-neutral-400">
                                        <strong>Key Decision:</strong> Additional monitors for dual-screen workflows<br />
                                        <strong>Impact:</strong> Enhanced productivity, improved multitasking capabilities
                                    </p>
                                </div>

                                <div className="border-l-4 border-purple-500 pl-4">
                                    <h5 className="font-medium text-neutral-200">Jan 17, 2023 - Budget Confirmation</h5>
                                    <p className="text-neutral-400">
                                        <strong>Budget Approved:</strong> CHF 200,000 + CHF 40,000 contingency<br />
                                        <strong>Internet Infrastructure:</strong> Existing 1GB/s Swisscom connection confirmed
                                    </p>
                                </div>
                            </div>
                        </PostCard>

                        <Grid cols={3}>
                            <PostCard tint="blue">
                                <h4 className="font-medium text-blue-300 mb-2">Project Gates</h4>
                                <p className="text-blue-200/80 text-sm">7 formal review points with stakeholder approval</p>
                            </PostCard>
                            <PostCard tint="green">
                                <h4 className="font-medium text-green-300 mb-2">Milestones</h4>
                                <p className="text-green-200/80 text-sm">9 critical milestones tracked and delivered on time</p>
                            </PostCard>
                            <PostCard tint="purple">
                                <h4 className="font-medium text-purple-300 mb-2">Communication</h4>
                                <p className="text-purple-200/80 text-sm">Regular meetings ensuring transparent progress updates</p>
                            </PostCard>
                        </Grid>
                    </div>
                </PostSection>

                {/* Project Outcomes */}
                <PostSection title="Project Outcomes & Success Metrics">
                    <div className="mb-8">
                        <h3 className="text-2xl font-semibold text-neutral-100 mb-4">Delivery Success</h3>
                        <p className="text-neutral-300 mb-6">
                            The project was delivered on time, under budget, and exceeded client expectations in
                            several key areas, establishing a modern, scalable office environment.
                        </p>

                        <Grid cols={3}>
                            <PostCard tint="green" className="text-center">
                                <div className="text-2xl font-bold text-green-300 mb-2">100%</div>
                                <p className="text-green-200/80 text-sm">On-time milestone delivery</p>
                            </PostCard>
                            <PostCard tint="blue" className="text-center">
                                <div className="text-2xl font-bold text-blue-300 mb-2">29%</div>
                                <p className="text-blue-200/80 text-sm">Under budget (CHF 57,191 saved)</p>
                            </PostCard>
                            <PostCard tint="purple" className="text-center">
                                <div className="text-2xl font-bold text-purple-300 mb-2">Zero</div>
                                <p className="text-purple-200/80 text-sm">Business interruption days</p>
                            </PostCard>
                        </Grid>
                    </div>

                    <div className="mb-8">
                        <h3 className="text-2xl font-semibold text-neutral-100 mb-4">Business Impact</h3>
                        <div className="space-y-4">
                            <PostCard>
                                <h4 className="font-medium text-lg mb-3">Operational Improvements</h4>
                                <Grid cols={2}>
                                    <div>
                                        <h5 className="font-medium text-neutral-200 mb-2">Efficiency Gains</h5>
                                        <ul className="text-neutral-400 text-sm space-y-1">
                                            <li>• Enhanced workflows with dual-monitor setups</li>
                                            <li>• Improved video conferencing for remote collaboration</li>
                                            <li>• Professional meeting spaces for client presentations</li>
                                            <li>• Scalable server infrastructure for growth</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h5 className="font-medium text-neutral-200 mb-2">Strategic Benefits</h5>
                                        <ul className="text-neutral-400 text-sm space-y-1">
                                            <li>• Modernized company image and workspace</li>
                                            <li>• Increased capacity for team expansion</li>
                                            <li>• Enhanced employee satisfaction and retention</li>
                                            <li>• Improved client presentation capabilities</li>
                                        </ul>
                                    </div>
                                </Grid>
                            </PostCard>

                            <PostCard>
                                <h4 className="font-medium text-lg mb-3">Technical Achievements</h4>
                                <ul className="text-neutral-300 space-y-2">
                                    <li>• <strong>Seamless Migration:</strong> Zero data loss during server transition</li>
                                    <li>• <strong>Performance Upgrade:</strong> 40% improvement in processing capabilities</li>
                                    <li>• <strong>Scalability:</strong> Infrastructure supports 200% employee growth</li>
                                    <li>• <strong>Reliability:</strong> Redundant systems ensure 99.9% uptime</li>
                                    <li>• <strong>Security:</strong> Enhanced data protection with local hosting maintained</li>
                                </ul>
                            </PostCard>
                        </div>
                    </div>

                    <div className="mb-8">
                        <h3 className="text-2xl font-semibold text-neutral-100 mb-4">Lessons Learned</h3>
                        <Grid cols={2}>
                            <PostCard tint="green">
                                <h4 className="font-medium text-green-300 mb-3">Project Strengths</h4>
                                <ul className="text-green-200/80 text-sm space-y-1">
                                    <li>• Comprehensive risk assessment prevented major issues</li>
                                    <li>• Parallel workstream execution optimized timeline</li>
                                    <li>• Stakeholder communication ensured alignment</li>
                                    <li>• Detailed planning enabled smooth execution</li>
                                    <li>• Quality procurement saved costs while meeting requirements</li>
                                </ul>
                            </PostCard>
                            <PostCard tint="orange">
                                <h4 className="font-medium text-orange-300 mb-3">Improvement Opportunities</h4>
                                <ul className="text-orange-200/80 text-sm space-y-1">
                                    <li>• Earlier supplier evaluation could reduce delivery risks</li>
                                    <li>• More detailed user requirement sessions for better specification</li>
                                    <li>• Extended testing periods for complex integrations</li>
                                    <li>• Enhanced documentation for future maintenance</li>
                                    <li>• Post-deployment monitoring for optimization opportunities</li>
                                </ul>
                            </PostCard>
                        </Grid>
                    </div>

                    <div className="mb-8">
                        <h3 className="text-2xl font-semibold text-neutral-100 mb-4">Professional Development Impact</h3>
                        <p className="text-neutral-300 mb-4">
                            This Module M306 project provided comprehensive experience in enterprise project management,
                            combining theoretical frameworks with practical implementation challenges in a real-world scenario.
                        </p>

                        <PostCard>
                            <h4 className="font-medium text-lg mb-3">Key Competencies Developed</h4>
                            <Grid cols={2}>
                                <div>
                                    <h5 className="font-medium text-neutral-200 mb-2">Project Management</h5>
                                    <ul className="text-neutral-400 text-sm space-y-1">
                                        <li>• Work breakdown structure design</li>
                                        <li>• Critical path analysis and optimization</li>
                                        <li>• Resource allocation and budget management</li>
                                        <li>• Risk assessment and mitigation planning</li>
                                        <li>• Stakeholder communication and governance</li>
                                    </ul>
                                </div>
                                <div>
                                    <h5 className="font-medium text-neutral-200 mb-2">Technical Implementation</h5>
                                    <ul className="text-neutral-400 text-sm space-y-1">
                                        <li>• Enterprise IT infrastructure design</li>
                                        <li>• Vendor evaluation and procurement</li>
                                        <li>• Installation planning and coordination</li>
                                        <li>• System integration and testing</li>
                                        <li>• Knowledge transfer and training delivery</li>
                                    </ul>
                                </div>
                            </Grid>
                        </PostCard>
                    </div>
                </PostSection>

            </PostLayout>

            {/* Footer */}
            <footer className="text-center mt-12 text-neutral-400">
                <p className="text-sm">
                    Enterprise Project Management • Module M306 • CHF 240,000 Budget • 5-Week Delivery
                </p>
            </footer>
        </>
    )
}
