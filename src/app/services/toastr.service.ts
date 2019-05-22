import { Injectable } from "@angular/core";

declare let toastr: any;

@Injectable()
export class ToastrService {

  constructor() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    // toastr.options = {
    //   "closeButton": false,
    //   "debug": true,
    //   "newestOnTop": false,
    //   "progressBar": false,
    //   "positionClass": "toast-bottom-left",
    //   "preventDuplicates": false,
    //   "onclick": null,
    //   "showDuration": "300",
    //   "hideDuration": "300",
    //   "timeOut": "1500",
    //   "extendedTimeOut": "1000",
    //   "showEasing": "swing",
    //   "hideEasing": "linear",
    //   "showMethod": "fadeIn",
    //   "hideMethod": "fadeOut"
    // }
  }
  success(message: string, title?: string) {
    toastr.success(message, title);
  }
  info(message: string, title?: string) {
    toastr.info(message, title);
  }
  error(message: string, title?: string) {
    toastr.error(message, title);
  }
  warning(message: string, title?: string) {
    toastr.warning(message, title);
  }
}
