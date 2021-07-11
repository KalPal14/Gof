class HiringManager {

   takeInterview() {
      const interviewer = this.makeInterviewer()
      interviewer.askQuestions()
   }
}

class Developer {
   askQuestions() {
      console.log('Asking about GOF patterns!')
   }
}

class CommunityExecutive {
   askQuestions() {
      console.log('Asking about community building')
   }
}

class DevelopmentManager extends HiringManager {
   makeInterviewer() {
      return new Developer()
   }
}

class ProjectManager extends HiringManager {
   makeInterviewer() {
      return new CommunityExecutive()
   }
}

const devManager = new DevelopmentManager()
devManager.takeInterview()