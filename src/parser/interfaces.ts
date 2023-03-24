export type NativeElement =
  | 'view'
  | 'button'
  | 'text'
  | 'image'
  | 'textInput'
  | 'scrollView'
  | 'flatList'
  | 'sectionList'
  | 'switch'
  | 'touchableHighlight'
  | 'touchableOpacity'
  | 'statusBar'
  | 'activityIndicator';

export interface OrigNativeEl {
  type: NativeElement;
  // depends on key names in copies context
  children: string[];
  index: number;
}

export interface AppInterface {
  type: 'app';
  children: string[];
  state: string[];
}

export interface OrigCustomComp {
  name: string;
  type: 'custom';
  // depends on key names in copies context
  children: string[];
  state: string[];
  index: number;
  // depends on names of copies of this component in copies context
  copies: string[];
}

export interface Parent {
  origin: 'original' | 'copies';
  // depends on user's custom component names in originals
  key: NativeElement | string;
}

export interface CopyNativeEl {
  name: string;
  type: NativeElement;
  parent: Parent;
  // depends on names of copies in copies context
  children: string[];
}

export interface CopyCustomComp {
  name: string;
  type: 'custom';
  // depends on key names in copies context
  parent: string;
  // ALL depend on user's custom component names in originals
  pointer: NativeElement | string;
  children(): (NativeElement | string)[];
  state(): (NativeElement | string)[];
}
