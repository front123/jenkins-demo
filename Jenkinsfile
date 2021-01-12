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
        sh 'chmod +x run.sh'
        sh './run.sh'
        sh 'npm -v'
      }
    }
  }
}