@if(session()->has('status'))

    <div class="alert alert-info alert-dismissible fade show m-1" role="alert">
        {{session()->get('status')}}
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
    </div>

    @elseif (session()->has('error'))

    <div class="alert alert-warning alert-dismissible fade show m-1" role="alert">
        {{session()->get('error')}}
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
    </div>
    @endif
