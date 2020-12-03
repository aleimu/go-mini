/*
 * @Author: aleimu
 * @Date: 2020-12-03 13:31:18
 * @Description: file content
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
		if ok {
			root = value
		} else {
			newNode := make(map[string]*Trie, 0)
			root.subTrie[string(v)] = &Trie{
				name:    string(v),
				subTrie: newNode,
				isWord:  false,
			}
			root = root.subTrie[string(v)]
		}
	}
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
	word := "abcdef"
	obj.Insert(word)
	p1 := obj.Search(word)
	fmt.Println(p1)
	p2 := obj.StartsWith("abcd")
	fmt.Println(p2)
	p3 := obj.StartsWith("abcdf")
	fmt.Println(p3)

}

/*
作者：user4484c
链接：https://leetcode-cn.com/problems/implement-trie-prefix-tree/solution/golangqian-zhui-shu-ti-jie-si-lu-by-user4484c/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
*/
