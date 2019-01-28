package com.devops.console.controller;

import com.devops.console.model.RepoInfo;
import com.devops.console.service.BitBucketService;
import com.google.gson.Gson;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.CollectionUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import java.util.List;

@RestController
@RequestMapping("/api")
public class RepoController {

    private RestTemplate restTemplate = new RestTemplate();

    @Autowired
    private BitBucketService bitBucketService;

    @RequestMapping(method = RequestMethod.GET, path = "/isAlive")
    public String isAlive() {
        return "isAlive";
    }

    @RequestMapping(method = RequestMethod.GET, path = "/repos")
    public String retrieveRepoNameList() {
        List<RepoInfo> repoNameList = bitBucketService.retrieveRepoNameList();

        if(CollectionUtils.isEmpty(repoNameList)) {
            return "[]";
        }

        return new Gson().toJson(repoNameList);
    }
}
