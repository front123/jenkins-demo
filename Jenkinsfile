pipeline {
  agent { docker { image 'node:14-alpine' } }
  stages {
    stage('build') {
      steps {
          sh 'pwd'
          sh 'ls'
      }
    }
    stage('deploy'){
      steps{
        sh 'npm run dev'
      }
    }
  }
}