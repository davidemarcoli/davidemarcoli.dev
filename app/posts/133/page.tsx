import { Metadata } from 'next'
import PostLayout from '@/components/post/layout'
import PostSection from '@/components/post/section'
import Grid from '@/components/post/grid'
import PostCard from '@/components/post/card'
import CodeBlock from '@/components/post/code-block'

export const metadata: Metadata = {
  title: 'Grade Manager - Full-Stack Mobile Application',
  description:
    'A comprehensive React Native and Spring Boot application for academic grade management with modern architecture and testing practices.',
}

export default function GradeManagerPage() {
  return (
    <>
      <PostLayout
        title="Grade Manager"
        description="A full-stack mobile application for academic grade management built with React Native and Spring Boot, featuring modern architecture patterns and comprehensive testing."
        tags={[
          { label: 'React Native', variant: 'blue' },
          { label: 'Spring Boot', variant: 'green' },
          { label: 'MariaDB', variant: 'purple' },
        ]}
      >
        {/* Planning Section */}
        <PostSection title="Planning &amp; Technology Stack">
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-neutral-100 mb-4">Technology Decisions</h3>
            <p className="text-neutral-300 mb-4">
              After completing various vocational training courses, we had access to a broad range of technologies.
              For the backend, we learned Spring Boot, and for the frontend, we gained experience with React Native.
            </p>
            <p className="text-neutral-300 mb-4">
              Since we had recently worked intensively with both technologies in our courses, we decided to continue
              with this stack. React Native was particularly appealing because it allows us to develop the application
              once and export it for all platforms.
            </p>
            <p className="text-neutral-300 mb-6">
              For the data layer, we chose MariaDB, a relational database that we had also used in our training courses.
            </p>

            <PostCard className="mb-6">
              <h4 className="text-lg font-medium text-neutral-100 mb-4">Project Language Distribution</h4>
              <img src="/images/posts/133/language-distribution.png" alt="GitHub Language Distribution Chart" className="rounded" />
              <div className="mt-4 flex justify-center gap-8">
                <div className="text-center">
                  <div className="w-4 h-4 bg-blue-500 rounded-full mx-auto mb-1" />
                  <span className="text-sm text-neutral-400">TypeScript 87.1%</span>
                </div>
                <div className="text-center">
                  <div className="w-4 h-4 bg-orange-500 rounded-full mx-auto mb-1" />
                  <span className="text-sm text-neutral-400">Java 12.5%</span>
                </div>
                <div className="text-center">
                  <div className="w-4 h-4 bg-purple-500 rounded-full mx-auto mb-1" />
                  <span className="text-sm text-neutral-400">JavaScript 0.4%</span>
                </div>
              </div>
            </PostCard>
          </div>

          {/* Use Cases */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-neutral-100 mb-4">Use Cases</h3>
            <Grid cols={2}>
              <PostCard>
                <h4 className="font-semibold text-lg mb-2">User Registration</h4>
                <p className="text-sm text-neutral-400 mb-2">Use Case ID: 1</p>
                <p className="text-neutral-300 mb-3">The user registers for the application</p>
                <div className="text-sm text-neutral-400">
                  <p className="mb-1">
                    <strong>Procedure:</strong>
                  </p>
                  <ol className="list-decimal list-inside space-y-1">
                    <li>User navigates to registration page</li>
                    <li>User fills in name, email, and password fields</li>
                    <li>Optional: User uploads profile picture</li>
                    <li>If all fields are valid, send registration request</li>
                  </ol>
                </div>
              </PostCard>

              <PostCard>
                <h4 className="font-semibold text-lg mb-2">User Login</h4>
                <p className="text-sm text-neutral-400 mb-2">Use Case ID: 2</p>
                <p className="text-neutral-300 mb-3">The user logs into the application</p>
                <div className="text-sm text-neutral-400">
                  <p className="mb-1">
                    <strong>Procedure:</strong>
                  </p>
                  <ol className="list-decimal list-inside space-y-1">
                    <li>User navigates to login page</li>
                    <li>User fills in email and password fields</li>
                    <li>If fields are valid and credentials exist, log user in</li>
                  </ol>
                </div>
              </PostCard>

              <PostCard>
                <h4 className="font-semibold text-lg mb-2">Add Grade</h4>
                <p className="text-sm text-neutral-400 mb-2">Use Case ID: 3</p>
                <p className="text-neutral-300 mb-3">The user adds a new grade</p>
                <div className="text-sm text-neutral-400">
                  <p className="mb-1">
                    <strong>Procedure:</strong>
                  </p>
                  <ol className="list-decimal list-inside space-y-1">
                    <li>User navigates to grade creation page</li>
                    <li>User fills in grade, school, subject, and weight fields</li>
                    <li>If all fields are valid, save the grade</li>
                  </ol>
                </div>
              </PostCard>

              <PostCard>
                <h4 className="font-semibold text-lg mb-2">Edit Grade</h4>
                <p className="text-sm text-neutral-400 mb-2">Use Case ID: 5</p>
                <p className="text-neutral-300 mb-3">The user edits an existing grade</p>
                <div className="text-sm text-neutral-400">
                  <p className="mb-1">
                    <strong>Procedure:</strong>
                  </p>
                  <ol className="list-decimal list-inside space-y-1">
                    <li>User navigates to grade editing page</li>
                    <li>User selects the grade to edit</li>
                    <li>User updates grade, school, subject, and weight fields</li>
                    <li>If all fields are valid, update the grade</li>
                  </ol>
                </div>
              </PostCard>
            </Grid>
          </div>
        </PostSection>

        {/* Task Management */}
        <PostSection title="Project Management">
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-neutral-100 mb-4">GitHub Projects Integration</h3>
            <p className="text-neutral-300 mb-4">
              To make the implementation process of our 3-tier application as timely and enjoyable as possible, we placed
              great emphasis on planning. We had excellent experiences with GitHub Projects in previous projects.
            </p>
            <p className="text-neutral-300 mb-6">
              Issues in our GitHub repository are graphically displayed through GitHub Projects in a Kanban board, giving us
              as developers a direct overview of the application&apos;s development status.
            </p>

            <PostCard className="mb-6">
              <h4 className="text-lg font-medium text-neutral-100 mb-4">Kanban Board Overview</h4>
              <img src="/images/posts/133/kanban-board.png" alt="GitHub Projects Kanban Board Screenshot" className="rounded" />
            </PostCard>

            <p className="text-neutral-300">
              Initially, we created the most necessary tasks as issues in the Ready column and clarified who would start with
              which task. The biggest advantage for us developers is that everyone can work independently and assign
              themselves a task they&apos;re interested in. Once a task is completed, it&apos;s moved to &quot;In review&quot; so the other team
              member can review the implementation, providing opportunities for mutual learning.
            </p>
          </div>
        </PostSection>

        {/* Architecture */}
        <PostSection title="Architecture &amp; Design">
          {/* Frontend Architecture */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-neutral-100 mb-4">Frontend Architecture</h3>
            <p className="text-neutral-300 mb-4">
              We work with the React Native framework, which allows us to compile a cross-platform app. As developers, we only
              need to write the code once, and it works on all platforms.
            </p>

            <h4 className="text-lg font-medium text-neutral-100 mb-3">Models</h4>
            <p className="text-neutral-300 mb-4">
              In our application, classes are stored in a folder named &quot;model&quot;. We have 2 main classes: the Grade class and the
              User class, containing all attributes our application needs.
            </p>

            <Grid cols={2}>
              <PostCard tint="neutral">
                <h5 className="font-medium mb-2">Grade Model</h5>
                <ul className="text-sm text-neutral-400 space-y-1">
                  <li>• id: string</li>
                  <li>• name: string</li>
                  <li>• grade: number</li>
                  <li>• subject: string</li>
                  <li>• school: string</li>
                  <li>• user: User</li>
                </ul>
              </PostCard>
              <PostCard tint="neutral">
                <h5 className="font-medium mb-2">User Model</h5>
                <ul className="text-sm text-neutral-400 space-y-1">
                  <li>• id: string</li>
                  <li>• email: string</li>
                  <li>• password: string</li>
                  <li>• name: string</li>
                  <li>• profilePictureUrl: string</li>
                </ul>
              </PostCard>
            </Grid>

            <h4 className="text-lg font-medium text-neutral-100 my-3">Services</h4>
            <p className="text-neutral-300 mb-4">Services handle processes that aren&apos;t directly related to the UI. We created 3 services:</p>

            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h5 className="font-medium text-neutral-100">Grade Service</h5>
                <p className="text-neutral-400 text-sm">
                  Handles all grade-related information and connects with the backend. Uses JavaScript&apos;s fetch() method to send
                  requests to our Spring Boot backend, converting objects to JSON strings.
                </p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h5 className="font-medium text-neutral-100">Theme Storage Service</h5>
                <p className="text-neutral-400 text-sm">
                  Responsible for local storage of theme selection. Can save, replace, and reload the currently selected theme
                  using AsyncStorage community implementation.
                </p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4">
                <h5 className="font-medium text-neutral-100">User Service</h5>
                <p className="text-neutral-400 text-sm">
                  Handles registration and login functionality, plus automatic login persistence. When users visit the login page,
                  it checks for stored credentials and attempts automatic login.
                </p>
              </div>
            </div>

            <h4 className="text-lg font-medium text-neutral-100 mb-3 mt-6">Component Architecture</h4>
            <Grid cols={4}>
              <PostCard tint="blue" className="text-center">
                <h5 className="font-medium text-blue-300 mb-2">Atoms</h5>
                <p className="text-sm text-blue-200/80">Basic building blocks like input fields and text elements</p>
              </PostCard>
              <PostCard tint="green" className="text-center">
                <h5 className="font-medium text-green-300 mb-2">Molecules</h5>
                <p className="text-sm text-green-200/80">Combinations of atoms, like input fields with labels</p>
              </PostCard>
              <PostCard tint="purple" className="text-center">
                <h5 className="font-medium text-purple-300 mb-2">Organisms</h5>
                <p className="text-sm text-purple-200/80">Collections of molecules and atoms forming complex components</p>
              </PostCard>
              <PostCard tint="orange" className="text-center">
                <h5 className="font-medium text-orange-300 mb-2">Screens</h5>
                <p className="text-sm text-orange-200/80">Complete application pages combining all component types</p>
              </PostCard>
            </Grid>
          </div>

          {/* Backend Architecture */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-neutral-100 mb-4">Backend Architecture</h3>
            <p className="text-neutral-300 mb-6">
              We work with the Spring Framework, which simplifies backend application creation with features like
              easy-to-configure REST endpoints and automatic DDL generation with Hibernate.
            </p>

            <h4 className="text-lg font-medium text-neutral-100 mb-3">Entities</h4>
            <p className="text-neutral-300 mb-4">
              Each database table has a corresponding entity represented by a Java class with important annotations:
            </p>

            <CodeBlock languageLabel="Java">
{`@Entity (name = "grades")
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Grade {
    @Id
    private String id;
    private String name;
    private double grade;
    private String subject;
    private String school;
    
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
}`}
            </CodeBlock>

            <Grid cols={3}>
              <PostCard tint="blue">
                <h5 className="font-medium text-blue-300 mb-2">@Entity</h5>
                <p className="text-sm text-blue-200/80">Indicates that a database table should be created for this class</p>
              </PostCard>
              <PostCard tint="green">
                <h5 className="font-medium text-green-300 mb-2">@Id</h5>
                <p className="text-sm text-green-200/80">Marks the primary key column as unique identifier</p>
              </PostCard>
              <PostCard tint="purple">
                <h5 className="font-medium text-purple-300 mb-2">@ManyToOne</h5>
                <p className="text-sm text-purple-200/80">Creates foreign key relationships between entities</p>
              </PostCard>
            </Grid>

            <h4 className="text-lg font-medium text-neutral-100 my-3">Controllers</h4>
            <p className="text-neutral-300 mb-4">
              REST endpoints are created using controllers, serving as the interface between the Spring Boot application and the
              internet:
            </p>

            <CodeBlock languageLabel="Java">
{`@RestController
@RequiredArgsConstructor
@RequestMapping("/api/grades")
public class GradeController {
    private final GradeService gradeService;

    @GetMapping("/user/{id}")
    public List<Grade> getGradesByUserID(@PathVariable("id") String userId) {
        return gradeService.getGradesByUserID(userId);
    }

    @PostMapping("/persistence/addgrade")
    public Grade saveGrade(@RequestBody Grade grade) throws LoginException {
        return gradeService.saveGrade(grade);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteGradeByID(@PathVariable("id") String gradeId) {
        gradeService.deleteGradeByID(gradeId);
    }

    @PutMapping("/update/{id}")
    public Grade updateGradeByID(
        @PathVariable("id") String gradeId, 
        @RequestBody Grade updatedGrade
    ) {
        return gradeService.updateGradeByID(gradeId, updatedGrade);
    }
}`}
            </CodeBlock>

            <h4 className="text-lg font-medium text-neutral-100 mb-3">Services</h4>
            <p className="text-neutral-300 mb-4">
              Services process data from endpoints, handling calculations, modifications, and creation. They typically consist of
              an interface and corresponding implementation:
            </p>

            <CodeBlock languageLabel="Java">
{`public interface GradeService {
    List<Grade> getAllGrades();
    Grade getGradeByID(String id);
    Grade saveGrade(Grade grade);
    List<Grade> getGradesByUserID(String userId);
    void deleteGradeByID(String gradeId);
    Grade updateGradeByID(String gradeId, Grade newGrade);
}

@Service
public class GradeServiceImpl implements GradeService {
    @Autowired
    private GradeRepository gradeRepository;

    @Override
    public Grade saveGrade(Grade grade) {
        return gradeRepository.save(grade);
    }

    @Override
    public void deleteGradeByID(String gradeId) {
        gradeRepository.deleteById(gradeId);
    }
}`}
            </CodeBlock>

            <h4 className="text-lg font-medium text-neutral-100 mb-3">Repository</h4>
            <p className="text-neutral-300 mb-4">
              The repository is crucial for data management, providing easy database communication and serving as the interface
              between Java code and SQL queries:
            </p>

            <CodeBlock languageLabel="Java">
{`@Repository
public interface GradeRepository extends JpaRepository<Grade, String> {
    List<Grade> findByUser_Id(String id);
}`}
            </CodeBlock>

            <p className="text-neutral-300">
              The interface has minimal content because we inherit from JpaRepository, providing many predefined methods like
              findById() and getAll(). Spring handles the implementation internally, saving significant development time.
            </p>
          </div>
        </PostSection>

        {/* Design */}
        <PostSection title="Design System">
          <p className="text-neutral-300 mb-6">
            We followed Material Design 3 guidelines to ensure a modern and consistent user experience across the application.
          </p>

          <h3 className="text-2xl font-semibold text-neutral-100 mb-4">Color Palette</h3>
          <PostCard className="mb-8">
            <img src="/images/posts/133/color-palette.png" alt="Color Palette" className="rounded" />
          </PostCard>

          <h3 className="text-2xl font-semibold text-neutral-100 mb-4">Mockups &amp; User Interface</h3>
          <p className="text-neutral-300 mb-6">
            Before starting development, we invested significant thought into the design and expressed our ideas through
            comprehensive mockups.
          </p>

          <Grid cols={2}>
            <div>
              <h4 className="text-lg font-medium text-neutral-100 mb-3">Authentication Screens</h4>
              <img src="/images/posts/133/auth-mockup.png" alt="Authentication Screen Mockup" className="rounded mb-4" />
              <p className="text-neutral-400 text-sm">
                The login and registration screens are the first pages users see, making them crucial for conveying a good first
                impression of our design.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-medium text-neutral-100 mb-3">Profile Overview</h4>
              <img src="/images/posts/133/profile-mockup.png" alt="Profile Screen Mockup" className="rounded mb-4" />
              <p className="text-neutral-400 text-sm">
                We wanted to give users a good overview of their activities in the app, showing important statistics at a glance
                without getting lost in various submenus.
              </p>
            </div>
          </Grid>

          <Grid cols={2} className='mt-2'>
            <div>
              <h4 className="text-lg font-medium text-neutral-100 mb-3">Grade Management</h4>
              <img src="/images/posts/133/add-grade-mockup.png" alt="Grades Screen Mockup" className="rounded mb-4" />
              <div className="text-sm text-neutral-400 space-y-2">
                <p>
                  <strong>Grade:</strong> A score between 1 and 6, can include decimal places
                </p>
                <p>
                  <strong>Grade Name:</strong> The exam topic, e.g., &quot;Trigonometry 2&quot;
                </p>
                <p>
                  <strong>Subject:</strong> The subject where the exam took place, e.g., &quot;Mathematics&quot;
                </p>
                <p>
                  <strong>School:</strong> The school where this grade was obtained
                </p>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-medium text-neutral-100 mb-3">Grade Editing Modal</h4>
              <img src="/images/posts/133/edit-grade-mockup.png" alt="Edit Grade Modal Mockup" className="rounded mb-4" />
              <p className="text-neutral-400 text-sm">
                Users can edit recorded grades through this modal. The data of the grade to be edited is automatically filled in,
                and users can adjust any fields or delete the grade with the delete button.
              </p>
            </div>
          </Grid>
        </PostSection>

        {/* Database Design */}
        <PostSection title="Database Design">
          <Grid cols={2}>
            <div>
              <h3 className="text-xl font-semibold text-neutral-100 mb-4">Entity Relationship Model (ERM)</h3>
              <img src="/images/posts/133/erm-diagram.png" alt="ERM Diagram" className="rounded mb-4" />
              <p className="text-neutral-400 text-sm">
                The ERM shows the relationship between Grades and Users, where multiple grades can belong to one user.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-neutral-100 mb-4">Entity Relationship Diagram (ERD)</h3>
              <img src="/images/posts/133/erd-diagram.png" alt="ERD Diagram" className="rounded mb-4" />
              <p className="text-neutral-400 text-sm">The ERD details the actual database schema with field types and constraints.</p>
            </div>
          </Grid>

          <div className="mt-8">
            <h4 className="text-lg font-medium text-neutral-100 mb-4">Database Schema Details</h4>
            <Grid cols={2}>
              <PostCard tint="blue">
                <h5 className="font-medium text-blue-300 mb-3">Grades Table</h5>
                <ul className="text-sm text-blue-200/80 space-y-1">
                  <li>
                    <strong>PK:</strong> id (VARCHAR(255), Not Null, Unique)
                  </li>
                  <li>name (VARCHAR(255), Not Null)</li>
                  <li>grade (DOUBLE, Not Null)</li>
                  <li>school (VARCHAR(255), Not Null)</li>
                  <li>subject (VARCHAR(255), Not Null)</li>
                  <li>
                    <strong>FK:</strong> id_user (VARCHAR(255), Not Null)
                  </li>
                </ul>
              </PostCard>

              <PostCard tint="green">
                <h5 className="font-medium text-green-300 mb-3">Users Table</h5>
                <ul className="text-sm text-green-200/80 space-y-1">
                  <li>
                    <strong>PK:</strong> id (VARCHAR(255), Not Null, Unique)
                  </li>
                  <li>email (VARCHAR(255), Not Null)</li>
                  <li>name (VARCHAR(255))</li>
                  <li>password (VARCHAR(255))</li>
                  <li>profile_picture_url (VARCHAR(255))</li>
                </ul>
              </PostCard>
            </Grid>
          </div>
        </PostSection>

        {/* UML Diagrams */}
        <PostSection title="UML Architecture">
          <p className="text-neutral-300 mb-6">
            The UML diagrams show the typical structure of a Spring Boot application consisting of three main components:
            Repository, Controller, and Service. The Controller contains our API endpoints, the Repository enables JPA database
            access, and the Service implements the business logic executed when specific endpoints are called.
          </p>

          <Grid cols={2}>
            <div>
              <h3 className="text-xl font-semibold text-neutral-100 mb-4">User Service Architecture</h3>
              <img src="/images/posts/133/user-uml-class-diagram.png" alt="User UML Class Diagram" className="rounded" />
            </div>

            <div>
              <h3 className="text-xl font-semibold text-neutral-100 mb-4">Grade Service Architecture</h3>
              <img src="/images/posts/133/grade-uml-class-diagram.png" alt="Grade UML Class Diagram" className="rounded" />
            </div>
          </Grid>
        </PostSection>

        {/* Testing */}
        <PostSection title="Testing &amp; Quality Assurance">
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-neutral-100 mb-4">Testing Environment</h3>
            <Grid cols={2}>
              <PostCard tint="blue">
                <h4 className="font-medium text-blue-300 mb-3">Development Environment</h4>
                <ul className="text-sm text-blue-200/80 space-y-1">
                  <li>• Ubuntu 22.04</li>
                  <li>• 17-inch display</li>
                  <li>• IntelliJ IDEA (2022.1.2) &amp; VS Code (1.67.1)</li>
                  <li>• Android Emulator: Pixel 4 API 32</li>
                  <li>• Java OpenJDK 18</li>
                </ul>
              </PostCard>

              <PostCard tint="green">
                <h4 className="font-medium text-green-300 mb-3">Testing Environment</h4>
                <ul className="text-sm text-green-200/80 space-y-1">
                  <li>• Pixel 4 API 32 (virtual device)</li>
                  <li>• Expo Go (Version 2.24.4)</li>
                </ul>
              </PostCard>
            </Grid>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-neutral-100 mb-4">Test Cases</h3>
            <p className="text-neutral-300 mb-6">We conducted comprehensive testing covering all major functionality areas:</p>

            <div className="space-y-4">
              <PostCard>
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-medium text-lg">Navigation Testing</h4>
                  <span className="text-xs px-2 py-1 rounded-full bg-green-500/20 text-green-300 ring-1 ring-inset ring-green-500/30">
                    PASSED
                  </span>
                </div>
                <p className="text-neutral-400 text-sm mb-2">Test Case #1 - Navigate between different pages</p>
                <p className="text-neutral-300 text-sm">
                  <strong>Action:</strong> Click &quot;Grades&quot; button in navbar
                  <br />
                  <strong>Expected:</strong> Navigation to &quot;Grades Overview&quot; page
                  <br />
                  <strong>Result:</strong> Successfully navigated to grades overview
                </p>
              </PostCard>

              <PostCard>
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-medium text-lg">Grade Listing</h4>
                  <span className="text-xs px-2 py-1 rounded-full bg-green-500/20 text-green-300 ring-1 ring-inset ring-green-500/30">
                    PASSED
                  </span>
                </div>
                <p className="text-neutral-400 text-sm mb-2">Test Case #2 - Display all grades</p>
                <p className="text-neutral-300 text-sm">
                  <strong>Expected:</strong> All grades visible on screen
                  <br />
                  <strong>Result:</strong> All grades successfully displayed
                </p>
              </PostCard>

              <PostCard>
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-medium text-lg">Create New Grade</h4>
                  <span className="text-xs px-2 py-1 rounded-full bg-green-500/20 text-green-300 ring-1 ring-inset ring-green-500/30">
                    PASSED
                  </span>
                </div>
                <p className="text-neutral-400 text-sm mb-2">Test Case #3 - Add new grade functionality</p>
                <p className="text-neutral-300 text-sm">
                  <strong>Actions:</strong> Navigate to add grade page → Fill in grade details → Submit
                  <br />
                  <strong>Result:</strong> Grade successfully created and saved
                </p>
              </PostCard>

              <PostCard>
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-medium text-lg">Edit Grade</h4>
                  <span className="text-xs px-2 py-1 rounded-full bg-green-500/20 text-green-300 ring-1 ring-inset ring-green-500/30">
                    PASSED
                  </span>
                </div>
                <p className="text-neutral-400 text-sm mb-2">Test Case #4 - Edit existing grade</p>
                <p className="text-neutral-300 text-sm">
                  <strong>Actions:</strong> Click existing grade → Edit popup opens → Change grade from 6 to 4 → Confirm
                  <br />
                  <strong>Result:</strong> Grade successfully updated
                </p>
              </PostCard>

              <PostCard>
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-medium text-lg">Google Authentication</h4>
                  <span className="text-xs px-2 py-1 rounded-full bg-green-500/20 text-green-300 ring-1 ring-inset ring-green-500/30">
                    PASSED
                  </span>
                </div>
                <p className="text-neutral-400 text-sm mb-2">Test Cases #6-7 - Google registration and login</p>
                <p className="text-neutral-300 text-sm">
                  <strong>Actions:</strong> Click Google button → Browser window opens → Login with Google credentials
                  <br />
                  <strong>Result:</strong> Successfully authenticated and navigated to main app
                </p>
              </PostCard>

              <PostCard>
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-medium text-lg">Theme Switching</h4>
                  <span className="text-xs px-2 py-1 rounded-full bg-green-500/20 text-green-300 ring-1 ring-inset ring-green-500/30">
                    PASSED
                  </span>
                </div>
                <p className="text-neutral-400 text-sm mb-2">Test Case #9 - Toggle between light and dark mode</p>
                <p className="text-neutral-300 text-sm">
                  <strong>Actions:</strong> Navigate to settings → Click &quot;Toggle Dark Mode&quot; button
                  <br />
                  <strong>Result:</strong> Theme successfully switched
                </p>
              </PostCard>
            </div>
          </div>

          <PostCard tint="green">
            <h4 className="font-medium text-green-300 mb-2">Testing Results Summary</h4>
            <p className="text-green-200/80 text-sm">
              All 9 test cases passed successfully, covering navigation, CRUD operations, authentication, and user interface
              functionality. The application demonstrates robust performance across all tested scenarios.
            </p>
          </PostCard>
        </PostSection>

        {/* Conclusion */}
        <PostSection title="Project Outcomes &amp; Learnings">
          <Grid cols={3}>
            <PostCard tint="blue" className="text-center">
              <div className="text-2xl font-bold text-blue-300 mb-2">Full-Stack</div>
              <p className="text-blue-200/80 text-sm">Complete end-to-end application with modern architecture</p>
            </PostCard>
            <PostCard tint="green" className="text-center">
              <div className="text-2xl font-bold text-green-300 mb-2">Cross-Platform</div>
              <p className="text-green-200/80 text-sm">Single codebase deployed across multiple platforms</p>
            </PostCard>
            <PostCard tint="purple" className="text-center">
              <div className="text-2xl font-bold text-purple-300 mb-2">Well-Tested</div>
              <p className="text-purple-200/80 text-sm">Comprehensive testing ensuring reliability</p>
            </PostCard>
          </Grid>

          <p className="text-neutral-300 mb-4 mt-3">
            This project successfully demonstrates the implementation of a modern full-stack mobile application using
            industry-standard technologies and best practices. The Grade Manager application showcases:
          </p>

          <ul className="text-neutral-300 space-y-2 mb-6">
            <li>
              • <strong>Modern Tech Stack:</strong> React Native frontend with Spring Boot backend and MariaDB database
            </li>
            <li>
              • <strong>Scalable Architecture:</strong> Clean separation of concerns with proper service layers and component
              structure
            </li>
            <li>
              • <strong>User-Centered Design:</strong> Material Design 3 principles ensuring intuitive user experience
            </li>
            <li>
              • <strong>Robust Authentication:</strong> Google OAuth integration with persistent session management
            </li>
            <li>
              • <strong>Comprehensive Testing:</strong> Full test coverage across all major functionality areas
            </li>
            <li>
              • <strong>Effective Project Management:</strong> GitHub Projects integration for organized development workflow
            </li>
          </ul>

          <p className="text-neutral-300">
            The project demonstrates proficiency in full-stack development, from database design and backend API development to
            frontend mobile application creation and comprehensive testing practices.
          </p>
        </PostSection>
      </PostLayout>

      {/* Footer */}
      <footer className="text-center mt-12 text-neutral-400">
        <p className="text-sm">
          Built with React Native, Spring Boot, and MariaDB •
          <a
            href="https://github.com/davidemarcoli/GradeManager-Mobile"
            className="text-blue-400 hover:text-blue-300 ml-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Source Code
          </a>
        </p>
      </footer>
    </>
  )
}