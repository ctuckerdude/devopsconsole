package com.devops.console.service;

import com.devops.console.model.RepoInfo;

import java.util.List;

public interface BitBucketService {

    public List<RepoInfo> retrieveRepoNameList();
}
