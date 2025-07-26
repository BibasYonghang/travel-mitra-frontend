### 🔒 autoComplete="new-password"

- Originally intended for password fields to prevent autofill suggestions.
- Commonly used as a workaround in `type="text"` inputs (e.g., search bars).
- Helps disable browser autocomplete/autosuggest when `autoComplete="off"` fails.
- Useful for custom suggestion systems (like YouTube-style search bars).
- ⚠️ Not a standard use for text inputs — may become unreliable in future browser updates.



### Clickable Elements: `<button>` vs `<a>`

- Use `<a>` when the element **navigates to another page or URL**.  
- Use `<button>` when the element **triggers an action on the current page** (e.g., form submission, toggling UI, search).  
- Avoid using `<div>` or `<span>` for clickable elements unless adding proper accessibility (not recommended).  
- Both `<a>` and `<button>` are inherently accessible and keyboard-friendly.  

# Toggling State with React `useState`

- `useState` holds a state value and provides a function to update it.
- To toggle a boolean state (e.g., show/hide), use the updater function form:

  setState(prev => !prev);
Here’s what it means:

prev is the current state value before update.

!prev flips the boolean value:

If prev is true, !prev becomes false.

If prev is false, !prev becomes true.

This toggles the state between true and false.

Using the function form ensures you always get the latest state value, which is important because React state updates are asynchronous and may be batched.

prev is a parameter representing the previous state value, and the function you pass to setState uses it to compute the new state.

So when you write prev => !prev, you are taking that parameter and returning its opposite, effectively toggling the boolean state.


### 🔒 Preventing Browser Autofill in Input Fields

Browsers often show saved suggestions (autofill) based on the `name` attribute, even if `autoComplete="off"` is set. To prevent this:

- Use a unique, non-standard `name` (e.g., `searchQuery_no_save`) to avoid triggering autofill.
- Still set `autoComplete="off"` for consistency.
- Avoid common names like `search`, `email`, `username`, which browsers recognize.

Example:
<input type="search" name="searchQuery_no_save" autoComplete="off" />


## sticky and top-0 is used in the navbar for best 