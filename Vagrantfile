Vagrant.configure("2") do |config|

  environment = ENV["APP_ENV"] || "development"

  # Install Chef 11.4.0 on the VM
  config.omnibus.chef_version = "11.4.0"

  # Sync the project directory to /vagrant on the VM
  config.vm.synced_folder ".", "/vagrant", owner: "www-data", group: "www-data", mount_options: ["dmode=777","fmode=777"]

  if environment == "qa"
    # QA environment settings

    # Give the base box a project-specific name, but the same box url. This will
    # allow us to easily create a prebuilt base box on the QA server, decreasing
    # the setup time for Chef recipes.Pl
    config.vm.box = "frontend-template"
    config.vm.box_url = "http://cloud-images.ubuntu.com/vagrant/precise/current/precise-server-cloudimg-amd64-vagrant-disk1.box"

    # QA environment uses DHCP on the host-only network adapter
    config.vm.network "private_network", type: :dhcp

    # Need this to enable DNS host resolution through NAT so our VM can access
    # the internet
    config.vm.provider "virtualbox" do |vb|
      vb.customize ["modifyvm", :id, "--natdnshostresolver1", "on", "--memory", "512"]
    end

    config.vm.provision "chef_solo" do |chef|
      chef.roles_path = "./cookbooks/roles"
      chef.cookbooks_path = "./cookbooks"
      chef.add_role "qa"

      app_name = ENV['APP_NAME'] || 'frontend-template-qa'

      chef.json = {
        "server" => {
          "server_name" => app_name + '.example.com',
          "server_aliases" => [
            app_name + '.example.com',
            '*.' + app_name + '.example.com'
          ]
        },
        "etc_environment" => {
          "APP_NAME" => app_name
        }
      }
    end
  else
    # Development environment settings
    config.vm.box = "precise-server-cloudimg-amd64-vagrant"
    config.vm.box_url = "http://cloud-images.ubuntu.com/vagrant/precise/current/precise-server-cloudimg-amd64-vagrant-disk1.box"

    static_ip = ENV['STATIC_IP'] || "192.168.50.2"
    config.vm.network "private_network", ip: static_ip

    config.vm.provider "virtualbox" do |vb|
      vb.customize ["modifyvm", :id, "--natdnshostresolver1", "on", "--memory", "512"]
    end

    config.vm.provision "chef_solo" do |chef|
      chef.roles_path = "./cookbooks/roles"
      chef.cookbooks_path = "./cookbooks"
      chef.add_role "development"
    end
  end

end
