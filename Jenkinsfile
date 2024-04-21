pipeline {
    agent any
    
    stages {
        stage('Build') {
            steps {
                // Clone the repository
                git 'https://github.com/valanhyr/super-hero-app.git'
                
                // Install npm dependencies
                sh '/usr/bin/npm install'

                
                // Build your project using npm
                sh 'npm run build '
            }
        }
        
        stage('Dockerize') {
            steps {
                script {
                    docker.build('mtg-app:latest', '.')
                }

            }
        }
        
        stage('Push to Registry') {
            steps {
                // Push Docker image to a registry
                withCredentials([usernamePassword(credentialsId: 'docker-hub-credentials', usernameVariable: 'admin', passwordVariable: 'hercules1818P')]) {
                    sh 'docker login -u $admin -p $hercules1818P 192.168.0.20:9000'
                    sh 'docker push 192.168.0.20:9000/admin/mtg-app:latest'
                }
            }
        }
    }
}
