const { isValidBST } = require('./isValidBST')
class BinaryTreeNode {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
    printValue() {
        console.log(this.value)
    }
    insertLeft(value) {
        this.left = new BinaryTreeNode(value)
        return this.left
    }

    insertRight(value) {
        this.right = new BinaryTreeNode(value)
        return this.right
    }
}

describe('isValidBST', () => {
    test('valid bst', () => {
        const rootNode = new BinaryTreeNode(8)
        const node1 = new BinaryTreeNode(4)
        const node2 = new BinaryTreeNode(12)
        const node3 = new BinaryTreeNode(2)
        const node4 = new BinaryTreeNode(6)
        const node5 = new BinaryTreeNode(10)
        const node6 = new BinaryTreeNode(14)
        const node7 = new BinaryTreeNode(1)
        const node8 = new BinaryTreeNode(3)
        const node9 = new BinaryTreeNode(5)
        const node10 = new BinaryTreeNode(7)
        const node11 = new BinaryTreeNode(9)
        const node12 = new BinaryTreeNode(11)
        const node13 = new BinaryTreeNode(13)
        const node14 = new BinaryTreeNode(15)
        rootNode.left = node1
        rootNode.right = node2
        node1.left = node3
        node1.right = node4
        node2.left = node5
        node2.right = node6
        node3.left = node7
        node3.right = node8
        node4.left = node9
        node4.right = node10
        node5.left = node11
        node5.right = node12
        node6.left = node13
        node6.right = node14
        expect(isValidBST(rootNode)).toBe(true)
    })
    test('invalid bst', () => {
        const rootNode = new BinaryTreeNode(3)
        const node1 = new BinaryTreeNode(4)
        const node2 = new BinaryTreeNode(12)
        const node3 = new BinaryTreeNode(2)
        const node4 = new BinaryTreeNode(6)
        const node5 = new BinaryTreeNode(10)
        const node6 = new BinaryTreeNode(14)
        const node7 = new BinaryTreeNode(1)
        const node8 = new BinaryTreeNode(3)
        const node9 = new BinaryTreeNode(5)
        const node10 = new BinaryTreeNode(7)
        const node11 = new BinaryTreeNode(9)
        const node12 = new BinaryTreeNode(11)
        const node13 = new BinaryTreeNode(13)
        const node14 = new BinaryTreeNode(15)
        rootNode.left = node1
        rootNode.right = node2
        node1.left = node3
        node1.right = node4
        node2.left = node5
        node2.right = node6
        node3.left = node7
        node3.right = node8
        node4.left = node9
        node4.right = node10
        node5.left = node11
        node5.right = node12
        node6.left = node13
        node6.right = node14
        expect(isValidBST(rootNode)).toBe(false)
    })
})
