'''
Author: aleimu
Date: 2020-12-03 21:39:43
Description: file content
'''
# https://videos5.jsyunbf.com/2019/02/07/iQX7y3p1dleAhIv7/out005.ts
import os
from os import path
import datetime
import requests
# m3u8是本地的文件路径


# def get_ts_urls(m3u8_path, base_url):
#     urls = []
#     with open(m3u8_path, "r") as file:
#         lines = file.readlines()
#         for line in lines:
#             if line.endswith(".ts\n"):
#                 # urls.append(base_url+line.strip("\n"))
#                 urls.append(line.strip("\n"))

#     return urls

import threading
import queue
import time
import os
import subprocess
import requests
import urllib
import random
import re
from Crypto.Cipher import AES


def get_ts_urls(m3u8_url, headers, token):
    urls = []
    filename = "./m3u8.txt"
    file = open(filename, 'w')
    content = requests.get(m3u8_url).text
    # print(content)
    # content = str(content)
    file.write(content)
    file.close()

    with open(filename, "r") as file:
        lines = file.readlines()
        for line in lines:
            print(line)
            # if line.endswith(".ts\n"):
            if '.ts?' in line:
                # urls.append(base_url+line.strip("\n"))
                urls.append(line.strip("\n"))
            elif 'URI' in line:
                URI = urllib.parse.urljoin(
                    url, re.findall('URI="(.*?)"', line)[0])  # 秘钥的网址
                print("url", URI)
                key = requests.get(
                    URI, params={'token': token}, headers=headers).text  # 得到秘钥
                print("-----", key)
                aes = AES.new(key, AES.MODE_CBC, key)  # 通过秘钥新建解密器

    return urls, aes


def download(ts_urls, download_path, aes):
    for i in range(len(ts_urls)):
        ts_url = ts_urls[i]
        file_name = ts_url.split("/")[-1]
        print("开始下载 %s" % file_name)
        start = datetime.datetime.now().replace(microsecond=0)
        try:
            response = requests.get(ts_url, stream=True, verify=False)
        except Exception as e:
            print("异常请求：%s" % e.args)
            return

        ts_path = download_path+"/{0}.ts".format(i)
        with open(ts_path, "wb+") as file:
            for chunk in response.iter_content(chunk_size=1024):
                if chunk:
                    after = aes.decrypt(chunk)
                    file.write(after)
        end = datetime.datetime.now().replace(microsecond=0)
        print("耗时：%s" % (end-start))


def file_walker(path):
    file_list = []
    for root, dirs, files in os.walk(path):  # 生成器
        for fn in files:
            p = str(root+'/'+fn)
            file_list.append(p)

    print(file_list)
    return file_list


def combine(ts_path, combine_path, file_name):
    file_list = file_walker(ts_path)
    file_path = combine_path + file_name + '.ts'
    with open(file_path, 'wb+') as fw:
        for i in range(len(file_list)):
            fw.write(open(file_list[i], 'rb').read())


def get_asc_key(key):
    '''
    获取密钥，把16进制字节码转换成ascii码
    :param key:从网页源代码中获取的16进制字节码
    :return: ascii码格式的key
    '''
    # 最简洁的写法
    # asc_key = [chr(int(i,16)) for i in key.split(',')]
    # 通俗易懂的写法
    key = key.split(',')
    asc_key = ''
    for i in key:
        i = int(i, 16)  # 16进制转换成10进制
        i = chr(i)  # 10进制转换成ascii码
        asc_key += i
    return asc_key


if __name__ == '__main__':

    url = "https://hls.videocc.net/5cea6c5252/e/5cea6c52522d21c42e4c1662c4d6480e_2.m3u8?pid=1607002399854X1335411&device=desktop"
    # urls = get_ts_urls(
    #     "playlist.m3u8", "https://videos5.jsyunbf.com/2019/02/07/iQX7y3p1dleAhIv7/")

    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.67 Safari/537.36 Edg/87.0.664.52'}
    token = "7da0e7ca-6368-4fb5-85d3-0c828b80e40d-483437"
    urls, aes = get_ts_urls(url, headers, token)
    print(urls)
    print(aes)
    # download(urls, "./ts", aes)
    # combine("./ts", "./mp4/", "haha.mp4")

    # https://hls.videocc.net/playsafe/5cea6c5252/9/5cea6c52522e3535047347c59bbe40e9_1.key?token=7da0e7ca-6368-4fb5-85d3-0c828b80e40d-483437

# https://hls.videocc.net/playsafe/5cea6c5252/d/5cea6c52520c20a16e1fa52b78e9718d_2.key?token=6e3d88ae-e52c-4854-a39a-1d01c22ca12f-a83437
# https://hls.videocc.net/playsafe/5cea6c5252/1/5cea6c5252e50f4b0e2c52b83b5df9c1_2.key?token=57541971-181e-4d8f-8b48-8cf83de79d63-h83437


3c104d16bf3c4a3ce62ab821d0ade620d25eeba7208f646ff9

# EXT-X-KEY:METHOD=AES-128,URI="https://hls.videocc.net/5cea6c5252/2/5cea6c5252bc7e5d3e6222a2567723f2_2.key",IV=0x9dac12a85df9b2b7e5bbcfd0319dcee8
# EXT-X-TARGETDURATION:17
# EXTINF:5.067000,

# https: // hls.videocc.net/playsafe/5cea6c5252/2/5cea6c5252bc7e5d3e6222a2567723f2_2.key?token =41a2f4ca-6c97-4222-b76c-f5df0ed59dde-g83437

var K = {
    16: 10,
    24: 12,
    32: 14
}


54d6ee31-69e3-417e-8dba-ea3dff02cc61-c83437"
54d6ee31-69e3-417e-8dba-ea3dff02cc61-c83437
