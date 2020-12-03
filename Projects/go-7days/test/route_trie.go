/*
 * @Author: aleimu
 * @Date: 2020-12-02 15:10:00
 * @Description: Trie 树实现 https://geektutu.com/post/gee-day3.html
 */

package main

import (
	"fmt"
	"strings"
)

// 二叉树节点类型
type node struct {
	pattern  string  // 待匹配路由，例如 /p/:lang
	part     string  // 路由中的一部分，例如 :lang
	children []*node // 子节点，例如 [doc, tutorial, intro]
	isWild   bool    // 是否精确匹配，part 含有 : 或 * 时为true
}

// 第一个匹配成功的节点，用于插入
func (n *node) matchChild(part string) *node {
	for _, child := range n.children {
		if child.part == part || child.isWild {
			return child
		}
	}
	return nil
}

// 所有匹配成功的节点，用于查找
func (n *node) matchChildren(part string) []*node {
	nodes := make([]*node, 0)
	for _, child := range n.children {
		if child.part == part || child.isWild {
			nodes = append(nodes, child)
		}
	}
	return nodes
}

func (n *node) insert(pattern string, parts []string, height int) {
	if len(parts) == height {
		n.pattern = pattern
		return
	}

	part := parts[height]
	child := n.matchChild(part)
	if child == nil {
		child = &node{part: part, isWild: part[0] == ':' || part[0] == '*'}
		n.children = append(n.children, child)
	}
	child.insert(pattern, parts, height+1)
}

func (n *node) search(parts []string, height int) *node {
	if len(parts) == height || strings.HasPrefix(n.part, "*") {
		if n.pattern == "" {
			return nil
		}
		return n
	}

	part := parts[height]
	children := n.matchChildren(part)

	for _, child := range children {
		result := child.search(parts, height+1)
		if result != nil {
			return result
		}
	}

	return nil
}

// 将路由切分并返回,判断路由中是否有通配符*
func parsePattern(pattern string) []string {
	vs := strings.Split(pattern, "/")
	parts := make([]string, 0)
	for _, item := range vs {
		if item != "" {
			parts = append(parts, item)
			if item[0] == '*' {
				break
			}
		}
	}
	return parts
}

func (n *node) printNode() {
	if n != nil {
		fmt.Println("node:", n)
	}
}

// 打印节点树
func (n *node) showNode() {

	for _, x := range n.children {
		if x != nil && x.children != nil {
			fmt.Println("node:", x)
			x.showNode()
		} else {
			fmt.Println("  node:", x)
		}

	}
}

func (n *node) match(url string) bool {
	tmp := n.search(parsePattern(url), 0)
	if tmp != nil {
		fmt.Println("match success", tmp)
		return true
	} else {
		fmt.Println("match failed", tmp)
		return false
	}

}

func main() {
	//make用于内建类型（map、slice 和channel）的内存分配
	//new用于各种类型的内存分配。
	n1 := new(node)
	// n2 := &node{}
	fmt.Println(n1)
	url := []string{"/v1/a/1", "/v1/a/2", "/v1/b/1", "/v1/b/2", "/v2/c", "/v3/*", "/v4/*/1", "/v5/*/a/b/*"}
	for _, v := range url {
		tmp := parsePattern(v)
		n1.insert(v, tmp, 0)
	}
	fmt.Println("---------------------------")
	n1.printNode()
	fmt.Println("---------------------------")
	n1.showNode()
	n1.match("/v1/a/1")
	n1.match("/v1/b/4")
	n1.match("/v1/12/")

	n1.match("/v3/12/")
	n1.match("/v3/12/1")

	n1.match("/v4/12/1")
	n1.match("/v4/12/2")

	n1.match("/v5/12/a/b/8")
	n1.match("/v5/12/c/b/8")
}

/*

golang的命名规范及大小写的访问权限
1、golang的命名需要使用驼峰命名法且不建议出现下划线

2、golang中根据首字母的大小写来确定可以访问的权限。无论是方法名、常量、变量名还是结构体的名称，如果首字母大写，则可以被其他的包访问；如果首字母小写，则只能在本包中使用
  可以简单的理解成，首字母大写是公有的，首字母小写是私有的

3、结构体中属性名的大写,如果属性名小写则在数据解析（如json解析,或将结构体作为请求或访问参数）时无法解析
*/
