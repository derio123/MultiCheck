import { Component, OnInit } from '@angular/core';
import { TreeModule, ITreeOptions  } from '@circlon/angular-tree-component';

@Component({
  selector: 'app-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.css']
})
export class TreeViewComponent implements OnInit {
  nodeItems = [
    {
      name: 'root1',
      children: [
        { name: 'child1' },
        { name: 'child2' }
      ]
    },
    {
      name: 'root2',
      children: [
        { name: 'child2.1', children: [] },
        {
          name: 'child2.2', children: [
            { name: 'grandchild2.2.1' }
          ]
        }
      ]
    },
    { name: 'root3' },
    { name: 'root4', children: [] },
    { name: 'root5', children: null }
  ];

  treeOptions: ITreeOptions = {
    useCheckbox: true
  };
  constructor() { }

  ngOnInit(): void {
  }

}

