To Do List - Part 1 and 2

_ Step 1 - Build a static version (tạo 1 phiên bản tĩnh chưa có logic hay state để có UI của application trước) => Paste over HTML and CSS of Todolist in Codepen

Sketch out the component before Coding ( follow with Sketch Pic) - ( Module 1 - ReactJs) - at 23'

1 - <ProfilePage />
    2 - <NaveBar />
    3 - <SideMenu/>
      4 - <Coworker/>
    5 - <ProfilePageMain />
      6 - <ProjectDetail/>
        7 - <TaskList/>
          8 - <TaskItem/>

*****************************************************

_ Step 2 - Identify states (states effect the UI, when you change States, React will update and rerender UI). Here we will define which states needed to create, simply that which ones change and it needs to update UI and it will define as States. For example, when you click Add , it will add new list this is one of the state or a text of the input can be a State that will change with UI as well 

    - The list of tasks
    - The text of the new task that user has entered
    - The value of the checkbox Show incomplete tasks only
    => Connecting States with UI

****************************************************

_ Step 3 - Handling events ( this is to create the behavior our application). Usually we use onChange or onSubmit.. and put Arrow function for the event

    - Form submit for a new task
    - Change a task's status
    - Removing a task // this one pretty much tricky, cause we will work with elements within Map () in App.js. This is hard , watch again at 28'
    - Toggle show incomplete tasks only

    *** Watch again from 36'
    const setTaskStatus 
    const removeTask

    *** Sum up all the task we did



