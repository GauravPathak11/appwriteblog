import React from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { Controller } from 'react-hook-form';

export default function RTE({ name, control, label, defaultValue = "" }) {
  return (
    <div className="w-full"> 
      {label && <label className="inline-block mb-1 pl-1">{label}</label>}

      <Controller
        name={name || "content"}
        control={control}
        render={({ field: { onChange } }) => (
          <Editor
  tinymceScriptSrc={`https://cdn.tiny.cloud/1/7jxuzm9u4y14i19c2o9hrdvtnfnezepqn6pbinhb2zvtoyh4/tinymce/7/tinymce.min.js`}
  initialValue={defaultValue}
  init={{
    apiKey: '7jxuzm9u4y14i19c2o9hrdvtnfnezepqn6pbinhb2zvtoyh4',  // Replace with actual API key
    height: 500,
    menubar: true,
    plugins: [
      "image",
      "advlist",
      "autolink",
      "lists",
      "link",
      "image",
      "charmap",
      "preview",
      "anchor",
      "searchreplace",
      "visualblocks",
      "code",
      "fullscreen",
      "insertdatetime",
      "media",
      "table",
      "code",
      "help",
      "wordcount",
      "anchor",
    ],
    toolbar:
      "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help",
    content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
  }}
  onEditorChange={onChange}
/>

        )}
      />
    </div>
  );
}
