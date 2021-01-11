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
        sh(returnStdout: true, script: "nohup npm run dev >> /var/log/expressoutput.log 2>&1 &")
        sh 'npm -v'
      }
    }
  }
}