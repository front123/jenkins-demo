pipeline {
  agent { docker { image 'node:14-alpine' } }
  stages {
    stage('build') {
      steps {
          sh 'npm install'
          sh 'ls'
          sh 'which nohup'
      }
    }
    stage('deploy'){
      steps{
        sh 'pwd'
        sh "JENKINS_NODE_COOKIE=dontkillme nohup npm run dev &"
        sh 'npm -v'
      }
    }
  }
}