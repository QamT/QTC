const componentIcon = () => '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7 19h10V4H7v15zm-5-2h4V6H2v11zM18 6v11h4V6h-4z" /><path d="M0 0h24v24H0z" fill="none" /></svg>'

export const menuData = [
  {
    name: 'Components',
    icon: componentIcon,
    subMenu: ['UI Components', 'Advanced Components'],
    children: [['Buttons', 'Progress', 'Cards', 'Tool Tip', 'List'], ['Date Picker']]
  }
]

