mkdir download
cd download/
$ rm -rf /usr/local/go && tar -C /usr/local -xzf go1.21.1.linux-amd64.tar.gz
sudo rm -rf /usr/local/go && sudo tar -C /usr/local -xzf go1.21.1.linux-amd64.tar.gz
export PATH=$PATH:/usr/local/go/bin
go version
which go
ls -la $(which go)
/usr/local/go/bin/go
vim ~/.bashrc
source ~/.bashrc
go version
# Add Docker's official GPG key:
sudo apt-get update
sudo apt-get install ca-certificates curl gnupg
sudo install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
sudo chmod a+r /etc/apt/keyrings/docker.gpg
echo   "deb [arch="$(dpkg --print-architecture)" signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
  "$(. /etc/os-release && echo "$VERSION_CODENAME")" stable" |   sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt-get update
$ sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
sudo docker run hello-world
sudo groupadd docker
sudo usermod -aG docker $USER
newgrp docker
docker run hello-world
git
git version
apt-get install git
sudo apt-get install git
cd ..
mkdir projects
ls
cd projects/
ls
go mod init "test"
go run .
cd projects
cd ..
cd ~/projects
go run .
vim /etc/wsl.conf 
cat /etc/wsl.conf 
cd projects
cd ~projects
ls
cd ~
ls
cd ~/projects
ls
go run .
ls
vim /etc/wsl.conf 
sudo vim /etc/wsl.conf 
cd ~/projects
go run .
cd ~/projects
go run .
sudo cat /etc/wsl.conf
go run .
ls
pwd
go mod init first_lecture
cd hw1
mkdir hw1
cd mkdir
cd hw1
cd ..
cd hw1
go mod init first_task
go run .
pwd
cd ..
rmdir hw1
rm hw1
rm -r hw1
mkdir hw1
cd hw1
go mod init first_task
rm -r hw1
cd ..
rm -r hw1
mkdir hw1
rm -r hw1
cd ..
ls
cd projects/
mkdir hw1
cd hw1
go mod init first_task
cd ..
go mod init first_task
ls
mkdir hw1
rm go.mod 
ls
cd hw1
go mod init hw1
ls
cd cmd
ls
go run .
go get -u go.uber.org/zap
go run .
