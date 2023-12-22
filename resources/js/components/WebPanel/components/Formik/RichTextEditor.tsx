import React, { FC, ReactNode, useEffect, useMemo, useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { Editor as E } from 'tinymce'
import { useField } from 'formik';
import './richText.css'

interface RichTextProps extends React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
    name: string,
    formSectionClassName?: string
    children?: ReactNode 
	label?: string
}

const RichTextEditor: FC<RichTextProps> = ({name, className, label, required}) => {
	const editorRef = useRef<E | null>(null);
	const [field, meta, {setValue}] = useField({ type: 'textarea', name })
	const initialContent = useMemo(() => field.value, [name])
	useEffect(() => {
		if (editorRef.current) {
			const autosave = setInterval(() => {
				setValue(editorRef.current?.getContent() || '')
			}, 5000)
			return () => clearInterval(autosave)
		}
	}, [editorRef.current])
	return (
		<div className={className}>
			{label && <div className='pb-3 px-2 text-gray-700 text-sm'>- {label}{required ? ' *' : ''}</div>}
			<Editor
				tinymceScriptSrc={location.origin + '/tinymce/tinymce.min.js'}
				onInit={(evt, editor) => editorRef.current = editor}
				initialValue={initialContent}
				init={{
					height: 500,
					menubar: false,
					directionality: 'rtl',
					language: 'fa',
					plugins: [
						'advlist', 'autolink', 'lists', 'link', 'image', 'charmap',
						'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
						'insertdatetime', 'media', 'table', 'preview', 'help', 'wordcount'
					],
					toolbar: 'undo redo | blocks | ' +
						'link bold italic forecolor | alignleft aligncenter ' +
						'alignright alignjustify | bullist numlist outdent indent | ' +
						'removeformat | help',
					// content_css: `/public/css/app.css`,
					// body_class: 'font-iran-sans'
					content_style: `
					@font-face {
						font-family: IranSansWeb;
						src: url(${location.origin}/fonts/IRANSansWeb.ttf);
					}
					body { font-family: IranSansWeb; font-size:14px }
					`
				}}
				onBlur={(evt, editor) => setValue(editor?.getContent() || '')}
			/>
		</div>
	);
}

export default RichTextEditor