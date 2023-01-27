window.addEventListener('load', () => {
	const form = document.querySelector("#new-blog-form");
	const input = document.querySelector("#new-blog-input");
	const list_el = document.querySelector("#tasks");

	form.addEventListener('submit', (e) => {
		e.preventDefault();

		const blog = input.value;

		const blog_el = document.createElement('div');
		blog_el.classList.add('blog');

		const blog_content_el = document.createElement('div');
		blog_content_el.classList.add('content');

		blog_el.appendChild(blog_content_el);

		const post_input_el = document.createElement('input');
		post_input_el.classList.add('text');
		post_input_el.type = 'text';
		post_input_el.value = task;
		// post_input_el.setAttribute('readonly', 'readonly');

		blog_content_el.appendChild(post_input_el);

		const post_actions_el = document.createElement('div');
		post_actions_el.classList.add('actions');
		
		const post_edit_el = document.createElement('button');
		post_edit_el.classList.add('edit');
		post_edit_el.innerText = 'Edit';

		const blog_delete_el = document.createElement('button');
		blog_delete_el.classList.add('delete');
		blog_delete_el.innerText = 'Delete';

		post_actions_el.appendChild(post_edit_el);
		post_actions_el.appendChild(blog_delete_el);

		blog_el.appendChild(post_actions_el);

		list_el.appendChild(blog_el);

		input.value = '';

		post_edit_el.addEventListener('click', (e) => {
			if (post_edit_el.innerText.toLowerCase() == "edit") {
				post_edit_el.innerText = "Save";
				post_input_el.focus();
			} else {
				post_edit_el.innerText = "Edit";
			}
		});

		blog_delete_el.addEventListener('click', (e) => {
			list_el.removeChild(task_el);
		});
	});
});