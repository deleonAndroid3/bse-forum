import {
  AlignmentConfig,
  AutosaveConfig,
  CKFinderAdapterConfig,
  CloudServicesConfig,
  FontFamilyConfig,
  FontSizeConfig,
  HeadingConfig,
  HighlightConfig,
  ImageConfig,
  MediaEmbedConfig,
  TypingConfig,
} from "@ckeditor/ckeditor5-core";

export interface CKEditorConfig {
  alignment?: AlignmentConfig;
  autosave?: AutosaveConfig;
  balloonToolbar?: string[];
  blockToolbar?: string[];
  ckfinder?: CKFinderAdapterConfig;
  cloudServices?: CloudServicesConfig;
  fontFamily?: FontFamilyConfig;
  fontSize?: FontSizeConfig;
  heading?: HeadingConfig;
  highlight?: HighlightConfig;
  image?: ImageConfig;
  language?: string;
  mediaEmbed?: MediaEmbedConfig;
  placeholder?: string;
  plugins?: Array<string | Plugin>;
  removePlugins?: string[];
  toolbar?: string[] | { items: string[]; viewportTopOffset: number };
  typing?: TypingConfig;
}
