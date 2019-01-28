package com.devops.console.controller;

import com.devops.console.service.DeploymentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class DeploymentController {
    @Autowired
    private DeploymentService deploymentService;

    @RequestMapping(value = "deploy/{environmentId}", method = RequestMethod.GET)
    public String deployEnvironment(@PathVariable("environmentId") String environmentId) {
      return deploymentService.deployEnvironment(environmentId);
    }
}
