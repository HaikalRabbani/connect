import { defineField, defineType } from 'sanity'

export const projectType = defineType({
  name: 'project',
  title: 'Katalog Proyek',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Judul Proyek',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      type: 'string',
      title: 'Kategori Proyek',
      description: 'Contoh: E-commerce, Corporate, Creative Agency',
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Thumbnail Proyek',
      options: { hotspot: true }, // Biar bisa crop gambar langsung di dashboard
    }),
    defineField({
      name: 'link',
      type: 'url',
      title: 'Link Website Proyek',
    }),
  ],
})
