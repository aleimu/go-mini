/*
 * @Author: aleimu
 * @Date: 2020-12-03 13:31:18
 * @Description: 前缀字典的实现,字符串的后一个字母组成字典是前一个字母的value,形如{a:{b:{c:{d:{e:...}}}}}
 */

package main

import "fmt"

type Trie struct {
	name    string
	subTrie map[string]*Trie
	//加一个tag，来标记，是否为一个完整的单词
	isWord bool
}

/** Initialize your data structure here. */
func Constructor() Trie {
	return Trie{
		name:    "",
		subTrie: make(map[string]*Trie, 0),
		isWord:  false,
	}
}

/** Inserts a word into the trie. */
func (this *Trie) Insert(word string) {
	root := this
	for _, v := range word {
		value, ok := root.subTrie[string(v)]
		// 检查单词在当前深度的嵌套字典中是否已经存在,
		// 第一次插入时肯定时不存在的
		// 之后的插入会有用到,判断分支
		fmt.Println("root:", root, "v:", "sub:", root.subTrie, v, "value", value, "ok:", ok)
		if ok {
			root = value
		} else {
			// 初始化前缀字典
			newNode := make(map[string]*Trie, 0)
			root.subTrie[string(v)] = &Trie{
				name:    string(v),
				subTrie: newNode,
				isWord:  false,
			}
			// 交换root,形成嵌套
			root = root.subTrie[string(v)]
		}
	}
	// 一个字符串遍历完成,设定到此
	root.isWord = true
}

/** Returns if the word is in the trie. */
func (this *Trie) Search(word string) bool {
	isWord, ok := this.searchbyWord(word)
	if ok && isWord {
		return true
	}
	return false
}

/** Returns if there is any word in the trie that starts with the given prefix. */
func (this *Trie) StartsWith(prefix string) bool {
	_, ok := this.searchbyWord(prefix)
	return ok
}

func (this *Trie) searchbyWord(word string) (bool, bool) {

	var (
		root  *Trie
		value *Trie
		ok    bool
	)
	root = this
	for _, v := range word {
		value, ok = root.subTrie[string(v)]
		fmt.Println(value)
		if ok {
			root = value
			continue
		}
		return false, false
	}
	return value.isWord, true
}

func (this *Trie) match(re string) bool {
	for _, v := range this.subTrie {
		if v.name == re {
			return true
		}
	}

	return false
}

func main() {

	obj := Constructor()
	word := "abcdeffff"
	obj.Insert(word)
	fmt.Println("obj:", obj, "obj.sub:", obj.subTrie)
	// p1 := obj.Search(word)
	// fmt.Println(p1)
	// p2 := obj.StartsWith("abcd")
	// fmt.Println(p2)
	// p3 := obj.StartsWith("abcdf")
	// fmt.Println(p3)

}
