import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    {
      name:"name",
      type:"string",
      title:"Category Name",
      validation: Rule => Rule.required()
    },{
      name:"Description",
      type:"string",
      title:"Category Description",
      validation: rule=> rule.required()
    },
    {
      name:"Image",
      type:"image",
      title:"image of Category ",
    }
  ],
})
