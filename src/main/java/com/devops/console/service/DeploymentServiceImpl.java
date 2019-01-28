package com.devops.console.service;

import com.devops.console.util.BatchFileUtil;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class DeploymentServiceImpl implements DeploymentService {

    @Value("${deployment.batchfile}")
    private String deploymentBatchFile;

    @Override
    public String deployEnvironment(String environmentId) {
        System.out.println("deployEnvironment: environmentId: " + environmentId);
        BatchFileUtil.invokeDosBatchFile(deploymentBatchFile, environmentId);
        return "{\"status\": \"ok\"}";
    }
}
