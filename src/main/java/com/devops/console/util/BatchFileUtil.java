package com.devops.console.util;

import java.io.BufferedReader;
import java.io.InputStream;
import java.io.InputStreamReader;

public class BatchFileUtil {

    public static void invokeDosBatchFile(String filePath, String arg) {
        try {
            Runtime rt = Runtime.getRuntime();
            Process process = rt.exec(new String[]{"cmd.exe", "/c", filePath, arg});
            InputStream inputStream = process.getInputStream();
            BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(inputStream));
            String line;
            while ((line = bufferedReader.readLine()) != null) {
                System.out.println(line);
            }
            System.out.println("end------");
        } catch (Exception ex) {
            ex.printStackTrace();
        }
    }
}
