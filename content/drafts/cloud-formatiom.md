## Cloud Formation

- what is?

Orcastration of aws resources like ec2 rds etc. Unlike ansible which mainly ensures environment of a machine. Ansible acts within the OS like, it's ensures services and packages are installed, the right directories are created with rigt ownership and permission.

CloudFormation can be thought of TerraForm which helps orcastrating physical resource like ec2 machine, lambda function, rds etc.

- What are these jargons mean?

### Template:

A CloudFormation template defines the rosources and their properties and looks like this:

```yaml
AWSTemplateFormatVersion: "2010-09-09"
Description: A sample template
Resources:
  MyEC2Instance:
    Type: "AWS::EC2::Instance"
    Properties: 
      ImageId: "ami-2f726546"
      InstanceType: t1.micro
      KeyName: testkey
      BlockDeviceMappings:
        -
          DeviceName: /dev/sdm
          Ebs:
            VolumeType: io1
            Iops: 200
            DeleteOnTermination: false
            VolumeSize: 20
  MyEIP:
    Type: AWS::EC2::EIP
    Properties:
      InstanceId: !Ref MyEC2Instance
```

This template defines two resources. Every resources start with a name here `MyEC2Instance` and `MyEIP` are the two resources. Each resources must have a `Type`. In our case `AWS:EC2:Instance` and `AWS::EC2::EIP` are the types. We can also set the properties of the resources under the `Properties` section 


### Stack:

A stack is a cloudformation template describing a collection of resource and theier dependencies. The stack works as a single unit. If we delete a stack we delete all the resources in the stack. Say for a web application we need a loadbalancer a rds and a auto scaling group, we can create. We can use and existing cloudformation template or create our own defining all the resources and their properties. When we use that template to create a AWS cloudformation stack, cloudformation provisions all the resources. 

- CloudFormation helps replicate stack easily and predictably in multiple region.
- With cloudformation we can keep track of what changes and if problem occures after updating the stack we can easily rollback to previous version. It kind of gives a git like experiences for the resources.

When you use AWS CloudFormation, you manage related resources as a single unit called a stack. You create, update, and delete a collection of resources by creating, updating, and deleting stacks. All the resources in a stack are defined by the stack's AWS CloudFormation template.


### Change Set:

If you need to make changes to the running resources in a stack, you update the stack. Before making changes to your resources, you can generate a change set, which is summary of your proposed changes. Change sets allow you to see how your changes might impact your running resources, especially for critical resources, before implementing them.

For example, if you change the name of an Amazon RDS database instance, AWS CloudFormation will create a new database and delete the old one. You will lose the data in the old database unless you've already backed it up. If you generate a change set, you will see that your change will cause your database to be replaced, and you will be able to plan accordingly before you update your stack



