<% layout("/layouts/boilerplate") %>
<div class="row">
    <div class="col-8 offset-2">
        <h3>Create a New Listing</h3>
        <form method="POST" action="/listings">
            <div class="mb-3">
                <label for="title" class="form-label">Title</label>
                <input id="title" name="listing[title]" placeholder="enter title" type="text" class="form-control" />
            </div>
            
            <div class="mb-3">
                <label for="description" class="form-label">Description</label>
                <textarea
                    id="description"
                    name="listing[description]"
                    placeholder="enter description"
                    class="form-control"
                ></textarea>
            </div>
            
            <div class="mb-3">
                <label for="image" class="form-label">Image Link</label>
                <input
                    id="image"
                    name="listing[image]"
                    placeholder="enter image URL/Link"
                    type="text"
                    class="form-control"
                />
            </div>
            
            <div class="mb-3">
                <label for="price" class="form-label">Price</label>
                <input
                    id="price"
                    name="listing[price]"
                    placeholder="enter price"
                    type="number"
                    class="form-control"
                />
            </div>
            
            <div class="mb-3">
                <label for="country" class="form-label">Country</label>
                <input
                    id="country"
                    name="listing[country]"
                    placeholder="enter country"
                    type="text"
                    class="form-control"
                />
            </div>
            
            <div class="mb-3">
                <label for="location" class="form-label">Location</label>
                <input
                    id="location"
                    name="listing[location]"
                    placeholder="enter location"
                    type="text"
                    class="form-control"
                />
            </div>
            
            <button class="btn btn-dark">Add</button>
        </form>
    </div>
</div>
