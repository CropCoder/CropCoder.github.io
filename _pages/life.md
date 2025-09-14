---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /life/
  - /life.html
---



# 赵记稳-20250716-工作总结报告

> 摘要：

## 1. 小麦群体重测序变异检测分析项目

工作路径：/home/zhaojiwen/nas_ma/DataBackBox/wheat/20250101_Wheat_4K

### 背景简介

前期通过3900多份小麦材料进行序列比对和变异检测，在超算平台完成gvcf计算，后来因为合并过程中30MB左右区块儿异常，需要修正缺失位置，因此在本地96C服务器进行合并，然后基于MP文章公布的版本对变异位置进行更新，获得最终VCF文件。

### 最新进展

- 完成了VCF文件的合并与位置更新，包括header部分染色体长度的更新，累计3934个样本VCF
- 完成了李老师和吴老师所需的子集提取，并计算了群体结构、亲缘关系Kinship、系统发育树、变异密度等

### 后续计划

根据硬过滤得到的VCF文件变异位点位置信息，使用[varigraph](https://github.com/JiaoLab2021/varigraph)测试进行王老师样本分析

![image-20250715110941030](https://jewin.oss-cn-hangzhou.aliyuncs.com/image-20250715110941030.png)

## 2. 水稻重测序分析与变异检测项目

工作路径：/share/org/YZWL/yzwl_masw/zhaojiwen/20250708_Rice_WGS_by_GPU

### 背景简介

通过 GPU 加速的parabricks 软件进行变异检测分析，将 4TB 左右的 filter 数据传输到超算上，并传输 MSU7 版本的参考基因组用于后续分析，使用超算专属GPU队列，利用L20*4显卡进行加速，完成后使用GTX将800多份样本的gvcf文件进行合并，然后使用bcftools进行过滤得到VCF文件。

### 最新进展

-  完成了gvcf文件计算，耗时25小时，结果文件累计约
- 完成了基础的统计分析，累计获得。。。

### 后续计划

使用该VCF进行群体结构分析、PCA分析、系统发育树构建

## 3. 王宁邮寄的