package com.devops.console.service;

import com.devops.console.model.ProjectRepoDetails;
import com.devops.console.model.RepoInfo;
import com.google.gson.Gson;
import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

import java.util.LinkedList;
import java.util.List;

@Component
public class BitBucketServiceImpl implements BitBucketService {

    @Value("${bitbucket.repos.url}")
    private String bitBucketReposUrl;

    private RestTemplate restTemplate = new RestTemplate();

    @Override
    public List<RepoInfo> retrieveRepoNameList() {
        List<RepoInfo> repoInfoList = new LinkedList<>();
        Gson gson = new Gson();
        String response = restTemplate.getForObject(bitBucketReposUrl, String.class);

        if(StringUtils.isNotBlank(response)) {
            ProjectRepoDetails projectRepoDetails = gson.fromJson(response, ProjectRepoDetails.class);
            if(projectRepoDetails != null) {
                repoInfoList = projectRepoDetails.getValues();
            }
        }

        return repoInfoList;
    }
}
