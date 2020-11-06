package com.github.leijihui.spring.validation.util;


import java.io.File;
import java.util.ArrayList;
import java.util.LinkedList;


/**
 * @author 邪恶小先生
 */

/**
 * @author Lei Ji Hui
 * @version V1.0
 * @date 2020/11/6 9:59
 * @className FolderFileScanner
 * @copyright 天阳宏业科技股份有限公司 - All Rights Reserved
 **/
public class FolderFileScanner {

    private static ArrayList<Object> scanFiles = new ArrayList<Object>();

    /**
     * linkedList实现
     **/
    private static LinkedList<File> queueFiles = new LinkedList<File>();


    /**
     * TODO:递归扫描指定文件夹下面的指定文件
     * @return ArrayList<Object>
     * @author 邪恶小先生（LQ）
     * @time 2017年11月3日
     */
    /**
     * 递归扫描指定文件夹下面的指定文件
     *
     * @param folderPath
     * @return
     * @throws Exception
     */
    public static ArrayList<Object> scanFilesWithRecursion(String folderPath) throws Exception {
        ArrayList<String> dirctorys = new ArrayList<String>();
        File directory = new File(folderPath);
        if (!directory.isDirectory()) {
            throw new Exception('"' + folderPath + '"' + " input path is not a Directory , please input the right path of the Directory. ^_^...^_^");
        }
        if (directory.isDirectory()) {
            File[] filelist = directory.listFiles();
            for (int i = 0; i < filelist.length; i++) {
                /**如果当前是文件夹，进入递归扫描文件夹**/
                if (filelist[i].isDirectory()) {
                    dirctorys.add(filelist[i].getAbsolutePath());
                    /**递归扫描下面的文件夹**/
                    scanFilesWithRecursion(filelist[i].getAbsolutePath());
                }
                /**非文件夹**/
                else {
                    scanFiles.add(filelist[i].getAbsolutePath());
                }
            }
        }
        return scanFiles;
    }

    /**
     * 非递归方式扫描指定文件夹下面的所有文件
     *
     * @param folderPath
     * @param folderPath 需要进行文件扫描的文件夹路径
     * @return
     * @throws Exception
     */
    public static ArrayList<Object> scanFilesWithNoRecursion(String folderPath) throws Exception {
        File directory = new File(folderPath);
        if (!directory.isDirectory()) {
            throw new Exception('"' + folderPath + '"' + " input path is not a Directory , please input the right path of the Directory. ^_^...^_^");
        } else {
            //首先将第一层目录扫描一遍
            File[] files = directory.listFiles();
            //遍历扫出的文件数组，如果是文件夹，将其放入到linkedList中稍后处理
            for (int i = 0; i < files.length; i++) {
                if (files[i].isDirectory()) {
                    queueFiles.add(files[i]);
                } else {
                    //暂时将文件名放入scanFiles中
                    scanFiles.add(files[i].getAbsolutePath());
                }
            }

            //如果linkedList非空遍历linkedList
            while (!queueFiles.isEmpty()) {
                //移出linkedList中的第一个
                File headDirectory = queueFiles.removeFirst();
                File[] currentFiles = headDirectory.listFiles();
                for (int j = 0; j < currentFiles.length; j++) {
                    if (currentFiles[j].isDirectory()) {
                        //如果仍然是文件夹，将其放入linkedList中
                        queueFiles.add(currentFiles[j]);
                    } else {
                        scanFiles.add(currentFiles[j].getAbsolutePath());
                    }
                }
            }
        }

        return scanFiles;
    }
}
